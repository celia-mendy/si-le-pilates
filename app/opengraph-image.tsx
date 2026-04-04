import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Si Le Pilates — Studio de Pilates Reformer à Cergy-Pontoise'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#E5D9C8',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(201, 133, 128, 0.18)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'rgba(201, 133, 128, 0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: -40,
            width: 180,
            height: 180,
            borderRadius: '50%',
            background: 'rgba(238, 223, 213, 0.6)',
          }}
        />

        {/* Accent top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: '#C98580',
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            fontSize: 17,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C98580',
            marginBottom: 32,
            fontFamily: 'sans-serif',
            fontWeight: 600,
          }}
        >
          Studio de Pilates Reformer
        </div>

        {/* Brand name */}
        <div
          style={{
            display: 'flex',
            fontSize: 108,
            fontWeight: 700,
            color: '#3A2F2A',
            fontFamily: 'Georgia, serif',
            lineHeight: 1.0,
            textAlign: 'center',
            letterSpacing: '-0.01em',
          }}
        >
          Si Le Pilates
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            width: 64,
            height: 2,
            background: '#C98580',
            marginTop: 36,
            marginBottom: 32,
            borderRadius: 1,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 34,
            color: '#6E5F59',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            letterSpacing: '0.01em',
          }}
        >
          Le calme du lieu. La simplicité pour réserver.
        </div>

        {/* Location + URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 18,
            color: '#9E8E86',
            fontFamily: 'sans-serif',
            letterSpacing: '0.08em',
          }}
        >
          <span>Cergy-Pontoise</span>
          <span style={{ color: '#C98580' }}>·</span>
          <span>si-lepilates.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
