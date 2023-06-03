import { DefaultUi, Player, Youtube } from '@vime/react'
import '@vime/core/themes/default.css'

interface YoutubeProps {
  videoID: string
}

export function YoutubePlayer({ videoID }: YoutubeProps) {
  const ID = String(videoID)

  console.log(ID)

  return (
    <Player controls>
      <Youtube videoId={ID} />
      <DefaultUi />
    </Player>
  )
}
