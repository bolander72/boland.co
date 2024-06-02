'use client'

import { useCallback, useEffect, useState } from 'react'

const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomColor = (): string => `rgba(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)},1)`

const addNoiseToRegion = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  level: number
): void => {
  const imageData = ctx.getImageData(x, y, width, height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const noise = getRandomInt(-level, level)
    data[i] = Math.min(255, Math.max(0, data[i] + noise)) // Red
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)) // Green
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)) // Blue
  }

  ctx.putImageData(imageData, x, y)
}

const createRectangle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): void => {
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + width - radius, y)
  ctx.arcTo(x + width, y, x + width, y + radius, radius)
  ctx.lineTo(x + width, y + height - radius)
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius)
  ctx.lineTo(x + radius, y + height)
  ctx.arcTo(x, y + height, x, y + height - radius, radius)
  ctx.lineTo(x, y + radius)
  ctx.arcTo(x, y, x + radius, y, radius)
  ctx.closePath()
  ctx.fill()
}

const DEFAULT_ID = 'noisy'
const DEFAULT_STOPS = 2
const DEFAULT_COLORS: (string | undefined)[] = []
const DEFAULT_LEVEL = 8

interface NoisyGradientProps {
  id?: string
  stops?: number
  colors?: (string | undefined)[]
  level?: number
}

export default function useNoisyGradient() {
  const [palette, setPalette] = useState<string[]>([])
  const [base64ImageUrl, setBase64ImageUrl] = useState<string>('')

  const createNoisyGradient = useCallback(
    ({
      id = DEFAULT_ID,
      stops = DEFAULT_STOPS,
      colors = DEFAULT_COLORS,
      level = DEFAULT_LEVEL
    }: NoisyGradientProps = {}) => {
      const canvas = document.getElementById(id) as HTMLCanvasElement
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

      ctx.fillRect(0, 0, canvas.width, canvas.height)
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)

      const newPalette = []

      for (let i = 0; i < stops; i++) {
        if (colors[i]) {
          const color = colors[i] || getRandomColor()
          gradient.addColorStop(i / stops, color)
          newPalette.push(color)
        } else {
          const color = getRandomColor()
          gradient.addColorStop(i / stops, color)
          newPalette.push(color)
        }
      }

      ctx.fillStyle = gradient
      createRectangle(ctx, 0, 0, canvas.width, canvas.height, 0)
      addNoiseToRegion(ctx, 0, 0, canvas.width, canvas.height, level)

      setPalette(newPalette)
      setBase64ImageUrl(canvas.toDataURL())
    },
    []
  )

  const download = useCallback(
    ({ level = DEFAULT_LEVEL }: { level?: number } = {}) => {
      const canvas = document.createElement('canvas') as HTMLCanvasElement
      canvas.width = 1920
      canvas.height = 1080
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

      ctx.fillRect(0, 0, canvas.width, canvas.height)
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)

      palette.forEach((color, index) => {
        gradient.addColorStop(index / palette.length, color)
      })

      ctx.fillStyle = gradient
      createRectangle(ctx, 0, 0, canvas.width, canvas.height, 0)
      addNoiseToRegion(ctx, 0, 0, canvas.width, canvas.height, level)

      const link = document.createElement('a')
      link.download = `${palette.toString()}.png`
      link.href = canvas.toDataURL()
      link.click()
      link.remove()
      canvas.remove()
    },
    [palette]
  )

  useEffect(() => {
    createNoisyGradient()
  }, [createNoisyGradient])

  return { refresh: createNoisyGradient, download, base64ImageUrl }
}
