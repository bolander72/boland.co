import { ImageResponse } from 'next/og'

interface Props {
  title?: string | null
  description?: string | null
}

export default function BlogImage({ title, description }: Props) {
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
          backgroundImage: `url("https://boland.co/og/og-blog.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
            {title && (
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
                {title}
              </div>
            )}
            {description && (
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
                {description}
              </div>
            )}
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
