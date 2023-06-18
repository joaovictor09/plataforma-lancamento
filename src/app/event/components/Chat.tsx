'use client'

import { useState } from 'react'
import Iframe from 'react-iframe'

export function Chat({ liveId }: { liveId: string }) {
  const [loading, setLoading] = useState(true)

  const hostname =
    process.env.NODE_ENV === 'development'
      ? 'localhost'
      : 'lancamento-gui.joaovictor09.dev'

  return (
    <Iframe
      url={`https://www.youtube.com/live_chat?v=${liveId}&embed_domain=${hostname}&theme=dark`}
      className={`flex h-96 w-full rounded border border-blue-900 bg-zinc-200 ${
        loading && 'animate-pulse bg-gray-600'
      }`}
      display="inline"
      position="relative"
      onLoad={() => setLoading(false)}
    />
  )
}
