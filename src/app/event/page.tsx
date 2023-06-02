// import { useNavigate, useParams, Navigate} from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
// import { useGetFirstLessonSlugQuery } from "../graphql/types"

export default function Event(){
  // const { slug } = useParams<{ slug:string }>()
  // if !slug - query buscar a primeira aula - redirecionar para o slug da primeira aula
  // const { data } = useGetFirstLessonSlugQuery()


  return(
    <div>
      <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 flex-col xl:flex-row">
              <Video/> 
              <Sidebar />
            </main>
          </div>
        
      <Footer />
    </div>
    
  )
}