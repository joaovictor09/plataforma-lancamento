import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'videojs-youtube'
import 'video.js/dist/video-js.css'
import { DefaultUi, Player, Youtube } from '@vime/react'
import '@vime/core/themes/default.css'

interface YoutubeProps {
  videoID: string
}

export function YoutubePlayer({ videoID }: YoutubeProps) {
  // const videoNode = useRef<any>(null)
  // const player = useRef<any>(null)
  // const initialized = useRef(false)

  // const initialOptions = {
  //   controls: true,
  //   fluid: true,
  //   controlBar: {
  //     volumePanel: {
  //       inline: false,
  //     },
  //   },
  // }

  // const videoJsOptions = {
  //   sources: [
  //     {
  //       type: 'video/youtube', // important
  //       src: `https://www.youtube.com/watch?v=${videoID}`,
  //     },
  //   ],
  // }

  // useEffect(() => {
  //   if (videoNode.current && !initialized.current) {
  //     initialized.current = true // prevent duplicate initialization
  //     player.current = videojs(videoNode.current, {
  //       ...initialOptions,
  //       ...videoJsOptions,
  //     }).ready(function () {
  //       console.log('Player Ready')
  //     })
  //   }
  //   // clear up player on dismount
  //   return () => {
  //     if (player.current) {
  //       player.current.dispose()
  //     }
  //   }
  // })

  return (
    // <video
    //   ref={videoNode}
    //   className="video-js h-full w-full"
    //   placeholder={videoID}
    // />
    <Player>
      <Youtube videoId={videoID!} />
      <DefaultUi />
    </Player>
  )
}
