"use client"

// import { DefaultUi, Player, Youtube } from "@vime/react";
// import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css'
import { data } from "autoprefixer";
import Image from "next/image";
import { useEffect, useRef } from 'react';
import videojs from "video.js";
import "videojs-youtube";
import "video.js/dist/video-js.css";

// import { useGetLessonBySlugQuery } from "../graphql/types";

// interface VideoProps {
//   lessonSlug: string;
// }

export function Video(){
  const videoNode = useRef<any>(null);
  const player = useRef<any>(null);
  const initialized = useRef(false);
  // const { data } = useGetLessonBySlugQuery({
  //   variables: {
  //     slug: props.lessonSlug
  //   },
  //   fetchPolicy: "network-only",
  // })

  // if (!data || !data.lesson) {
  //   return (
  //     <div className="flex-1">
  //       <p>Carregando...</p>
  //     </div>
  //   )
  // }

  const initialOptions = {
    controls: true,
    fluid: true,
    controlBar: {
      volumePanel: {
        inline: false
      }
    }
  };
  
  const videoJsOptions = {
    sources: [
      {
        type: "video/youtube", //important
        src: "https://www.youtube.com/watch?v=mhJRzQsLZGg&pp=ygUFdGVzdGU%3D"
      }
    ]
  };

  useEffect(() => {
    if (videoNode.current && !initialized.current) {
      initialized.current = true; //prevent duplicate initialization
      player.current = videojs(videoNode.current, {
        ...initialOptions,
        ...videoJsOptions
      }).ready(function () {
        console.log("Player Ready");
      });
    }
    //clear up player on dismount
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  });
  
  return(
    <div className="flex-1">

      {/* VIDEO DIV */}

      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          {/* <Player>
            <Youtube videoId="AxnYhykRY2o" />
            <DefaultUi />
          </Player> */}
          <video ref={videoNode} className="video-js" />

        </div>
      </div>

      {/* LESSON AND TEACHER INFORMATIONS DIV */}

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col items-start gap-16 sm:flex-row">

          {/* LESSON INFORMATIONS */}

          <div className="flex-1">
            <h1 className="text-2xl font-bold ">
              Teste
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Teste
            </p>

            {/* TEACHER INFORMATIONS */}

              <div className="flex items-center gap-4 mt-6">
                <Image
                  height={100}
                  width={100}
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src="https://media.licdn.com/dms/image/D4D03AQF6JJK1cGItaw/profile-displayphoto-shrink_800_800/0/1681763150545?e=2147483647&v=beta&t=ETieZvP1MkyC3DJuTekF9bnnuU2CxP-hVA77Xiuy-7w" 
                  alt="" 
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">Guilherme Nagel</strong>
                  <span className="text-gray-200 text-sm block">CEO @bbmarketing</span>
                </div>
              </div>
          </div>

          {/* DISCORD AND CHALLENGE DIV */}

          <div className="flex flex-col gap-4 w-full sm:w-1/3 md:w-auto">
            <a href="#" className="p-4 text-small text-black bg-green-300 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              {/* <DiscordLogo size={24}/> */}
              Comunidade do Discord
            </a>

            <a href="#" className="p-4 text-small text-blue-500 border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              {/* <Lightning size={24}/> */}
              Acesse o Desafio
            </a>
          </div>
        </div>

        {/* WALLPAPERS AND MATERIALS DIV */}

        <div className="flex flex-col gap-8 mt-20 md:grid md:grid-cols-2">
          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-300 p-6 flex items-center">
              {/* <FileArrowDown size={40} /> */}
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">
                Material Complementar
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="p-6 flex items-center">
              {/* <CaretRight size={24} /> */}
            </div>
          </a>
          
          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-300 p-6 flex items-center">
              {/* <Image size={40} /> */}
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">
                Wallpapers Exclusivos
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="p-6 flex items-center">
              {/* <CaretRight size={24} /> */}
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}