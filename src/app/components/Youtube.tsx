'use client'

import YouTube from 'react-youtube'

interface YoutubeProps {
  videoID: string
}

export function YoutubePlayer({ videoID }: YoutubeProps) {
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
      className="aspect-video h-full w-full"
      opts={opts}
    />
  )
}
