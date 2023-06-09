import { VideoSkeleton } from './lesson/[slug]/components/VideoSkeleton'
import { SidebarSkeleton } from './lesson/[slug]/components/SidebarSkeleton'

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
