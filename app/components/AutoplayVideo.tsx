'use client'
import { useRef, useEffect } from 'react'

export default function AutoplayVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = ref.current?.querySelector('video') as HTMLVideoElement | null
    if (!video) return
    video.muted = true
    video.play().catch(() => {})
  }, [])

  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: `<video src="${src}" autoplay muted loop playsinline preload="auto" class="${className ?? ''}"></video>`
      }}
    />
  )
}
