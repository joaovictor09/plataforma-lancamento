import { client } from '@/lib/apollo'
import { gql } from '@apollo/client'
import { use } from 'react'
import { Sidebar } from '../../../components/Sidebar'
import { Video } from '../../../components/Video'

interface paramsProps {
  slug: string
}

interface teacherProps {
  avatarURL: string
  bio: string
  name: string
}

interface lessonProps {
  id: string
  slug: string
  title: string
  description: string
  videoId: string
  lessonType: 'class' | 'live'
  teacher: teacherProps
  availableAt: Date
}

export const dynamicParams = true

async function fetchAllLessonsSlug() {
  const { data } = await client.query({
    query: gql`
      query getAllLessonsQuery {
        lessons {
          id
          title
          videoId
          description
          lessonType
          slug
          availableAt
          teacher {
            avatarURL
            bio
            name
          }
        }
      }
    `,
    fetchPolicy: 'no-cache',
  })

  return data.lessons
}

export async function generateStaticParams() {
  const lessons: lessonProps[] = await fetchAllLessonsSlug()

  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }))
}

export default function Event({ params }: { params: { slug: string } }) {
  // if !slug - query buscar a primeira aula - redirecionar para o slug da primeira aula
  const { slug }: paramsProps = params
  const lessons: lessonProps[] = use(fetchAllLessonsSlug())

  const actualLessonIndex = lessons.findIndex((lesson) => lesson.slug === slug)

  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col xl:flex-row">
          <Video lesson={lessons[actualLessonIndex]} />
          <Sidebar actualSlug={slug} lessons={lessons} />
        </main>
      </div>
    </div>
  )
}
