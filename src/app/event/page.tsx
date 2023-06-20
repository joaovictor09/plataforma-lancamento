import { client } from '@/lib/apollo'
import { gql } from '@apollo/client'
import { Play } from 'lucide-react'
import Link from 'next/link'

import { use } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { LessonCard } from './components/LessonCard'

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
    fetchPolicy: 'no-cache',
  })

  return data.lessons
}

export default function EventPage() {
  const lessons: lessonProps[] = use(fetchAllLessonsSlug())

  console.log(lessons)

  return (
    <main className="relative flex min-h-screen w-full flex-1 flex-col">
      <Header />

      <video
        width="100%"
        // src="https://occ-0-1352-1567.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZFfkg_2j79045iEKX9X5s2rGtPh_Wpeuk0pa2C8dQrmVqJYnTTTyCy9NBG3nbVxVI6rZpUvnanwJB09hkjvsJqoCfkcdFs9lBft.webp?r=9cb"
        // src={video}
        // alt=""
        autoPlay
        muted
        className="absolute -z-10 aspect-video w-full bg-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute -z-10 aspect-video w-full bg-gradient-to-b from-transparent to-gray-900 to-80% bg-cover" />

      <div className="mb-10 flex w-full flex-1 flex-col px-16 text-gray-100">
        <div className="flex h-[70vh] flex-col justify-end gap-4">
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
            className="flex w-max items-center gap-2 rounded-md bg-zinc-100 px-5 py-3 text-black"
          >
            <Play className="fill-black text-black" /> Assista o episódio 1
          </Link>
        </div>

        <div className="mt-10 flex w-full flex-col gap-5">
          <h2 className="text-2xl font-bold">Em alta</h2>
          <div className="grid w-full grid-cols-4 gap-5">
            {lessons.map((lesson, index) => (
              <LessonCard
                description={lesson.description}
                thumbImage={lesson.thumbImage.url || null}
                slug={lesson.slug}
                title={lesson.title}
                key={lesson.id}
                lessonNumber={index + 1}
                totalLessonQuantity={lessons.length}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer variant="dark" />
    </main>
  )
}
