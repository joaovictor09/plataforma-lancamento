import { gql } from '@apollo/client'
import { Lesson } from './Lesson'
import { client } from '@/lib/apollo'

interface LessonProps {
  id: string
  lessonType: 'class' | 'live'
  availableAt: Date
  title: string
  slug: string
}

interface DataProps {
  lessons: LessonProps[]
}

export async function Sidebar({ slug }: { slug: string }) {
  const { data } = await client.query<DataProps>({
    query: gql`
      query GetLessons {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
          id
          lessonType
          availableAt
          title
          slug
        }
      }
    `,
    fetchPolicy: 'no-cache',
  })

  return (
    <aside className="border-l border-zinc-200 bg-zinc-50 p-6 xl:w-[348px]">
      <span className="mb-6 block border-b border-zinc-200 pb-6 text-center text-2xl font-bold">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              actualSlug={slug}
            />
          )
        })}
      </div>
    </aside>
  )
}
