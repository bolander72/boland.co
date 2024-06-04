'use client'

import { useCallback, useEffect, useId, useRef } from 'react'

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

const getRandomColor = (): string =>
  `rgba(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)},1)`

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
interface Props {
  defaultValues: {
    stops: number
    colors: (string | undefined)[]
    level: number
    blur: number
    locked: boolean
  }
}

export default function useNoisyCover({ defaultValues }: Props) {
  const gradientRef = useRef<CanvasGradient | null>(null)
  const id = useId()

  const createNoisyCover = useCallback(
    ({ stops, colors, level, blur, locked }: Props['defaultValues']) => {
      const canvas = document.getElementById(id) as HTMLCanvasElement
      canvas.width = 1920
      canvas.height = 1080

      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      ctx.filter = `blur(${blur}px)`

      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      )

      if (!locked) {
        for (let i = 0; i < stops; i++) {
          const color = colors[i] || getRandomColor()
          gradient.addColorStop(i / stops, color)
        }

        gradientRef.current = gradient
      }

      ctx.fillStyle = gradientRef.current || gradient
      createRectangle(ctx, 0, 0, canvas.width, canvas.height, 0)
      addNoiseToRegion(ctx, 0, 0, canvas.width, canvas.height, level)

      canvas.setAttribute('background-image', `url(${canvas.toDataURL()})`)
    },
    [id]
  )

  const download = useCallback(() => {
    const canvas = document.getElementById(id) as HTMLCanvasElement

    const link = document.createElement('a')
    link.download = 'noisy-cover.png'
    link.href = canvas.toDataURL()
    link.click()
    link.remove()
  }, [id])

  useEffect(() => {
    createNoisyCover({ ...defaultValues })
  }, [createNoisyCover, defaultValues])

  return {
    refresh: createNoisyCover,
    download,
    id
  }
}
