import { VideoSkeleton } from './components/VideoSkeleton'
import { SidebarSkeleton } from './components/SidebarSkeleton'

export default async function LoadingLesson() {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col xl:flex-row">
          <VideoSkeleton />
          <SidebarSkeleton />
        </main>
      </div>
    </div>
  )
}
