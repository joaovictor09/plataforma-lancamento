'use client'

import { useState } from 'react'
import YouTube from 'react-youtube'

interface YoutubeProps {
  videoID: string
}

export function YoutubePlayer({ videoID }: YoutubeProps) {
  const [loading, setLoading] = useState(true)

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      enablejsapi: 1,
      rel: 0,
      modestbranding: 1,
      origin: 'http://localhost:3000',
      color: 'white',
    },
  }

  return (
    <YouTube
      videoId={videoID}
      className={`aspect-video h-full w-full ${
        loading && 'animate-pulse bg-zinc-700'
      }`}
      opts={opts}
      onReady={() => setLoading(!loading)}
    />
  )
}
