'use client'

import { useCallback, useEffect, useId } from 'react'

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
  radius: number,
  blur: number
): void => {
  if (blur > 0) {
    ctx.filter = `blur(${blur}px)`
  }

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

  if (blur > 0) {
    ctx.filter = 'none'
  }
}

interface Props {
  defaultValues: {
    stops: number
    count: number
    minWidth: number
    maxWidth: number
    minHeight: number
    maxHeight: number
    cornerRadius: number
    colors: (string | undefined)[]
    level: number
    blur: number
  }
}

export default function useNoisyShapes({ defaultValues }: Props) {
  const id = useId()

  const createNoisyShapes = useCallback(
    ({
      stops,
      count,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      cornerRadius,
      colors,
      level,
      blur
    }: Props['defaultValues']) => {
      const canvas = document?.getElementById(id) as HTMLCanvasElement
      canvas.width = 1920
      canvas.height = 1080

      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      ctx.fillStyle = 'transparent'

      for (let i = 0; i < count; i++) {
        const rectWidth = getRandomInt(minWidth, maxWidth)
        const rectHeight = getRandomInt(minHeight, maxHeight)
        const x = getRandomInt(0, canvas.width - rectWidth)
        const y = getRandomInt(0, canvas.height - rectHeight)

        const gradient = ctx.createLinearGradient(
          x,
          y,
          x + rectWidth,
          y + rectHeight
        )

        Array.from({ length: stops }).forEach((_, index) => {
          const color = colors[index] || getRandomColor()
          gradient.addColorStop(index / stops, color)
        })

        ctx.fillStyle = gradient
        createRectangle(ctx, x, y, rectWidth, rectHeight, cornerRadius, blur)
        addNoiseToRegion(ctx, x, y, rectWidth, rectHeight, level)
      }

      canvas.setAttribute('background-image', `url(${canvas.toDataURL()})`)
    },
    [id]
  )

  const download = useCallback(() => {
    const canvas = document.getElementById(id) as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.fillStyle = 'transparent'

    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const link = document.createElement('a')
    link.download = 'noisy-shapes.png'
    link.href = canvas.toDataURL()
    link.click()
    link.remove()
  }, [id])

  useEffect(() => {
    createNoisyShapes({ ...defaultValues })
  }, [createNoisyShapes, defaultValues])

  return {
    refresh: createNoisyShapes,
    download,
    id
  }
}
