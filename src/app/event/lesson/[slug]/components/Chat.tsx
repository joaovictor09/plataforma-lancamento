'use client'

import Iframe from 'react-iframe'

export function Chat({ liveId }: { liveId: string }) {
  return (
    <Iframe
      url={`https://www.youtube.com/live_chat?v=${liveId}&embed_domain=localhost`}
      className="flex h-96 w-full rounded border border-blue-900 bg-zinc-200"
      display="inline"
      position="relative"
    />
  )
}
