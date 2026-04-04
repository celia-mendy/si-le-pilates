import { ImageResponse } from 'next/og'

export const alt = 'Si Le Pilates — Studio de Pilates Reformer à Cergy-Pontoise'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const siteUrl = 'https://si-lepilates.com'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${siteUrl}/images/GDP_11+Large.jpeg`}
          alt=""
          width={1200} height={630} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(58,47,42,0.08) 0%, rgba(58,47,42,0.75) 100%)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: '#C98580', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px 64px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 15, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#D69A95', fontFamily: 'sans-serif', fontWeight: 600, display: 'flex' }}>
            Studio de Pilates Reformer · Cergy-Pontoise
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, color: '#F3EDE5', fontFamily: 'Georgia, serif', lineHeight: 1.05, display: 'flex' }}>
            Si Le Pilates
          </div>
          <div style={{ fontSize: 28, color: '#D6C9BC', fontFamily: 'Georgia, serif', fontStyle: 'italic', display: 'flex' }}>
            Le calme du lieu. La simplicité pour réserver.
          </div>
          <div style={{ fontSize: 17, color: '#9E8E86', fontFamily: 'sans-serif', letterSpacing: '0.06em', marginTop: 6, display: 'flex' }}>
            si-lepilates.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
