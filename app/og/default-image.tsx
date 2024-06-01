import { ImageResponse } from 'next/og'

export default function DefaultImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url("https://localhost:3000/og/og-blog.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
            width={400}
            height={400}
          />
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080
    }
  )
}
