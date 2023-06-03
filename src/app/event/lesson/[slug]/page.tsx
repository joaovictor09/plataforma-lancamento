import { Sidebar } from '../../../components/Sidebar'
import { Video } from '../../../components/Video'

interface paramsProps {
  slug: string
}

export default async function Event({ params }: { params: { slug: string } }) {
  // if !slug - query buscar a primeira aula - redirecionar para o slug da primeira aula
  const { slug }: paramsProps = params

  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col xl:flex-row">
          <Video lessonSlug={slug} />
          <Sidebar slug={slug} />
        </main>
      </div>
    </div>
  )
}
