import { client } from '@/lib/apollo'
import { gql } from '@apollo/client'
import 'keen-slider/keen-slider.min.css'
import { Play } from 'lucide-react'
import Link from 'next/link'

import { use } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Slider } from './components/Slider'

interface lessonProps {
  id: string
  slug: string
  title: string
  description: string
  thumbImage?: {
    url: string
  }
}

async function fetchAllLessonsSlug() {
  const { data } = await client.query({
    query: gql`
      query getAllLessonsQuery {
        lessons {
          id
          title
          description
          slug
          thumbImage {
            id
            url
          }
        }
      }
    `,
    fetchPolicy: 'network-only',
  })

  return data.lessons
}

export default function EventPage() {
  const lessons: lessonProps[] = use(fetchAllLessonsSlug())

  return (
    <main className="relative flex min-h-screen w-full flex-1 flex-col">
      <Header />

      <video
        width="100%"
        autoPlay
        muted
        className="absolute -z-10 aspect-video w-full bg-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute -z-10 aspect-video w-full bg-gradient-to-b from-transparent to-gray-900 to-80% bg-cover" />

      <div className="mb-10 flex w-full flex-1 flex-col overflow-x-hidden text-gray-100">
        <div className="flex h-[70vh] flex-col justify-end gap-4 px-16">
          <h1 className="text-7xl font-bold">
            <span className="text-3xl font-normal">IMERSÃO</span>
            <br /> VENDAS NA <br />
            PRÁTICA
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex aspect-square h-12 w-12 items-center justify-center bg-red-600 p-2">
              <span className="text-center text-xs font-bold">
                TOP
                <br /> 1
              </span>
            </div>

            <span className="text-xl font-bold">
              Internet Inteira: top 1 de hoje
            </span>
          </div>

          <p className="max-w-xl text-lg">
            Aprenda de forma simples e descomplicada o segredo das grandes
            agências para fechar mais de 80 contratos recorrentes de gestão de
            tráfego por mês.
          </p>

          <Link
            href="/event/lesson/como-prospectar-clientes-e-fechar-vendas-todos-os-dias"
            className="flex w-max items-center gap-2 rounded-md bg-zinc-100 px-5 py-3 font-bold text-black"
          >
            <Play className="fill-black text-black" /> Assista o episódio 1
          </Link>
        </div>

        <div className="mt-10 flex w-full flex-col gap-5 ">
          <h2 className="px-16 text-2xl font-bold">Em alta</h2>

          <Slider lessons={lessons} />
        </div>
      </div>

      <Footer variant="dark" />
    </main>
  )
}
