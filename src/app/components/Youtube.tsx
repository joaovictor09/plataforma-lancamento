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
      origin: 'localhost',
      color: 'white',
    },
  }

  return (
    <YouTube
      videoId={videoID}
      className={`mx-auto aspect-video h-full w-full max-w-[1100px] px-8 ${
        loading && 'animate-pulse bg-gray-600'
      }`}
      opts={opts}
      onReady={() => setLoading(!loading)}
    />
  )
}
