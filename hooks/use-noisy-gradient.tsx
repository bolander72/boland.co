import { useCallback } from 'react'

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomColor(): string {
  const r = getRandomInt(0, 255)
  const g = getRandomInt(0, 255)
  const b = getRandomInt(0, 255)
  const a = Math.random().toFixed(2) // alpha between 0 and 1
  return `rgba(${r},${g},${b},${a})`
}

function addNoiseToRegion(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  level = 30
): void {
  const imageData = ctx.getImageData(x, y, width, height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const noise = getRandomInt(-level, level)
    data[i] = Math.min(255, Math.max(0, data[i] + noise)) // Red
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)) // Green
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)) // Blue
    // Alpha (data[i + 3]) remains unchanged
  }

  ctx.putImageData(imageData, x, y)
}

function createRectangle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): void {
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

interface NoisyGradientProps {
  id?: string
  width?: number
  height?: number
  stops?: number
  level?: number
}

export default function useNoisyGradient() {
  const createNoisyGradient = useCallback(
    ({ id = 'noisy', stops = 2, level = 30 }: NoisyGradientProps) => {
      const canvas = document.getElementById(id) as HTMLCanvasElement

      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const x = 0
      const y = 0
      const cornerRadius = 0

      const gradient = ctx.createLinearGradient(
        x,
        y,
        x + canvas.offsetWidth,
        y + canvas.offsetHeight
      )

      for (let j = 0; j < stops; j++) {
        gradient.addColorStop(j / stops, getRandomColor())
      }

      ctx.fillStyle = gradient
      createRectangle(
        ctx,
        x,
        y,
        canvas.offsetWidth,
        canvas.offsetHeight,
        cornerRadius
      )

      addNoiseToRegion(
        ctx,
        x,
        y,
        canvas.offsetWidth,
        canvas.offsetHeight,
        level
      )

      return canvas.toDataURL()
    },
    []
  )

  return { createNoisyGradient }
}
