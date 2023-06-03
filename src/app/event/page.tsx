// import { useNavigate, useParams, Navigate} from "react-router-dom";
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'
// import { useGetFirstLessonSlugQuery } from "../graphql/types"

interface paramsProps {
  slug: string
}

export default async function Event({ params }: { params: { slug: string } }) {
  // const { slug } = useParams<{ slug:string }>()
  // if !slug - query buscar a primeira aula - redirecionar para o slug da primeira aula
  const { slug }: paramsProps = params

  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col xl:flex-row">
          <Video lessonSlug={slug} />
          <Sidebar slug={slug} />
        </main>
      </div>

      <Footer />
    </div>
  )
}
