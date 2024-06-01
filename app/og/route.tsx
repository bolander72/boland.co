import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { createCanvas } from '@napi-rs/canvas'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const postDescription = searchParams.get('description')

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
    height: number
  ): void {
    const imageData = ctx.getImageData(x, y, width, height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      const noise = getRandomInt(-30, 30)
      data[i] = Math.min(255, Math.max(0, data[i] + noise)) // Red
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)) // Green
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)) // Blue
      // Alpha (data[i + 3]) remains unchanged
    }
    ctx.putImageData(imageData, x, y)
  }

  function createSmoothRectangle(
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

  function createAbstractNoisyGradientBackground(
    width: number,
    height: number,
    outputPath?: string
  ) {
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#0A0A0A'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < 1; i++) {
      const rectWidth = 1920
      const rectHeight = 1080
      const x = 0
      const y = 0
      const cornerRadius = 0

      const gradient = ctx.createLinearGradient(
        x,
        y,
        x + rectWidth,
        y + rectHeight
      )
      gradient.addColorStop(0, getRandomColor())
      gradient.addColorStop(1, getRandomColor())

      ctx.fillStyle = gradient
      createSmoothRectangle(
        ctx as unknown as CanvasRenderingContext2D,
        x,
        y,
        rectWidth,
        rectHeight,
        cornerRadius
      )

      addNoiseToRegion(
        ctx as unknown as CanvasRenderingContext2D,
        x,
        y,
        rectWidth,
        rectHeight
      )
    }

    const buffer = canvas.toBuffer('image/png')

    return buffer.toString('base64')
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: `url("data:image/png;base64,${createAbstractNoisyGradientBackground(1920, 1080)}")`
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
            borderRadius: '16px',
            padding: '40px 0',
            height: '100%'
          }}
        >
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: 'flex',
              fontSize: 130,
              fontStyle: 'normal',
              fontWeight: 'semibold',
              color: 'white',
              lineHeight: '120px',
              whiteSpace: 'pre-wrap'
            }}
          >
            <img
              src='https://boland.co/favicon-white.png'
              alt='Boland Co.'
              width={150}
              height={150}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div
              style={{
                marginLeft: 190,
                marginRight: 190,
                display: 'flex',
                fontSize: 130,
                fontStyle: 'normal',
                fontWeight: 'semibold',
                color: 'white',
                lineHeight: '120px',
                whiteSpace: 'pre-wrap'
              }}
            >
              {postTitle}
            </div>
            <div
              style={{
                marginLeft: 190,
                marginRight: 190,
                display: 'flex',
                fontSize: 80,
                fontStyle: 'normal',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '120px',
                whiteSpace: 'pre-wrap'
              }}
            >
              {postDescription}
            </div>
          </div>
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src='https://boland.co/profile/profile.jpg'
              alt='Michael Boland'
              width={150}
              height={150}
              style={{ borderRadius: '100%' }}
            />
            <div
              style={{
                marginLeft: 50,
                marginRight: 190,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 60,
                  fontStyle: 'normal',
                  fontWeight: 700,
                  color: 'white',
                  whiteSpace: 'pre-wrap'
                }}
              >
                Michael Boland
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 40,
                  fontStyle: 'normal',
                  color: 'rgba(255, 255, 255, 0.8)',
                  whiteSpace: 'pre-wrap'
                }}
              >
                Independent Consultant
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080
    }
  )
}
