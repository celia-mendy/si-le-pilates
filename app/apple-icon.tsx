import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#EEDFD5',
          borderRadius: 40,
        }}
      >
        {/* Si Le Pilates monogram */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#C98580',
              fontFamily: 'Georgia, serif',
              lineHeight: 1,
            }}
          >
            S
          </div>
          <div
            style={{
              width: 28,
              height: 2,
              background: '#C98580',
              borderRadius: 1,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
