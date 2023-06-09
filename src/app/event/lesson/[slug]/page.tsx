import { client } from '@/lib/apollo'
import { gql } from '@apollo/client'
import { Sidebar } from '../../../components/Sidebar'
import { Video } from '../../../components/Video'
import LoadingLesson from './loading'

interface paramsProps {
  slug: string
}

export const dynamicParams = true

async function fetchAllLessonsSlug() {
  const { data } = await client.query({
    query: gql`
      query getAllLessonsQuery {
        lessons {
          slug
        }
      }
    `,
    fetchPolicy: 'no-cache',
  })

  return data
}

export async function generateStaticParams() {
  const { lessons } = await fetchAllLessonsSlug()

  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }))
}

export default async function Event({ params }: { params: { slug: string } }) {
  // if !slug - query buscar a primeira aula - redirecionar para o slug da primeira aula
  const { slug }: paramsProps = params

  // return (
  //   <div>
  //     <div className="flex min-h-screen flex-col">
  //       <main className="flex flex-1 flex-col xl:flex-row">
  //         <Video lessonSlug={slug} />
  //         <Sidebar slug={slug} />
  //       </main>
  //     </div>
  //   </div>
  // )

  return <LoadingLesson />
}
