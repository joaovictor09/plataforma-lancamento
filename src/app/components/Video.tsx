import whatsappLogo from '../../assets/icons/whatsapp.svg'

import { ChevronRight, FileDown, ImageIcon, Mail } from 'lucide-react'
import Image from 'next/image'
import { Chat } from '../event/components/Chat'
import { YoutubePlayer } from './Youtube'

interface teacherProps {
  avatarURL: string
  bio: string
  name: string
}

interface lessonProps {
  slug: string
  title: string
  description: string
  videoId: string
  lessonType: 'class' | 'live'
  teacher: teacherProps
}

interface VideoProps {
  lesson: lessonProps
}

export function Video({ lesson }: VideoProps) {
  const { description, teacher, title, videoId, lessonType } = lesson

  return (
    <div className="flex-1">
      {/* VIDEO DIV */}

      <div className="flex justify-center bg-zinc-900">
        <div className="aspect-video h-full max-h-[60vh] w-full max-w-[1100px]">
          {/* <Youtube videoID={data?.lesson?.videoId!} /> */}
          <YoutubePlayer videoID={videoId} />
        </div>
      </div>
      <div className="mx-auto max-w-[1100px] p-8">
        {lessonType === 'live' && <Chat liveId={videoId} />}
      </div>

      {/* LESSON AND TEACHER INFORMATIONS DIV */}

      <div className="mx-auto max-w-[1100px] px-8">
        <div className="flex flex-col items-start gap-16 sm:flex-row">
          {/* LESSON INFORMATIONS */}

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-zinc-100">{title}</h1>
            <p className="mt-4 leading-relaxed text-zinc-200">{description}</p>

            {/* TEACHER INFORMATIONS */}

            <div className="mt-10 flex items-center gap-4">
              <Image
                height={64}
                width={64}
                className="aspect-square h-16 items-center rounded-full border-2 border-blue-500"
                src={teacher.avatarURL}
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="block text-xl font-bold text-zinc-100">
                  {teacher.name}
                </strong>
                <span className="block text-sm text-zinc-200">
                  {teacher.bio}
                </span>
              </div>
            </div>
          </div>

          {/* DISCORD AND CHALLENGE DIV */}

          <div className="flex w-full flex-col gap-4 sm:w-1/3 md:w-auto">
            <a
              href="https://devzapp.com.br/#/dev-zap-grupos/61ce10a2e3d339000121f7ac"
              target="_blank"
              rel="noreferrer"
              className="text-small flex items-center justify-center gap-2 rounded bg-blue-900 p-4 font-bold uppercase text-white transition-all hover:bg-blue-950"
            >
              <Image src={whatsappLogo} height={24} alt="Whatsapp logo Logo" />
              Comunidade do Whatsapp
            </a>

            <a
              href="https://www.guilhermenagel.com.br/"
              target="_blank"
              className="text-small flex items-center justify-center gap-2 rounded border border-blue-900 p-4 font-bold uppercase text-blue-900 transition-all hover:border-blue-950 hover:text-blue-950"
              rel="noreferrer"
            >
              <Mail size={24} />
              Lista de Espera
            </a>
          </div>
        </div>

        {/* WALLPAPERS AND MATERIALS DIV */}

        <div className="mb-10 mt-20 flex flex-col gap-8 md:grid md:grid-cols-2">
          <a
            href=""
            className="group flex items-stretch gap-2 overflow-hidden rounded border border-blue-900 transition-colors hover:bg-blue-900 sm:gap-6"
          >
            <div className="flex items-center bg-blue-900 p-2 sm:p-6">
              <FileDown size={40} className="text-white" />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-xl text-zinc-100">
                Material Complementar
              </strong>
              <p className="mt-2 text-sm text-zinc-100">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="flex items-center p-2 text-blue-900 group-hover:text-zinc-100">
              <ChevronRight size={24} />
            </div>
          </a>

          <a
            href=""
            className="group flex items-stretch gap-2 overflow-hidden rounded border border-blue-900 transition-colors hover:bg-blue-900 sm:gap-6"
          >
            <div className="flex items-center bg-blue-900 p-2 sm:p-6">
              <ImageIcon size={40} className="text-white" />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl text-zinc-100">
                Wallpapers Exclusivos
              </strong>
              <p className="mt-2 text-sm text-zinc-100">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="flex items-center p-2 text-blue-900 group-hover:text-zinc-100">
              <ChevronRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
