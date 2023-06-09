'use client'

import Iframe from 'react-iframe'

export function Chat({ liveId }: { liveId: string }) {
  const hostname =
    process.env.NODE_ENV === 'development'
      ? 'localhost'
      : 'staging-lancamento-gui.joaovictor09.dev'

  return (
    <Iframe
      url={`https://www.youtube.com/live_chat?v=${liveId}&embed_domain=${hostname}`}
      className="flex h-96 w-full rounded border border-blue-900 bg-zinc-200"
      display="inline"
      position="relative"
    />
  )
}
