import { Lesson } from './Lesson'

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

interface sidebarProps {
  lessons: lessonProps[]
  actualSlug: string
}

export function Sidebar({ actualSlug, lessons }: sidebarProps) {
  return (
    <aside className="border-l border-zinc-200 bg-zinc-50 p-6 xl:w-[348px]">
      <span className="mb-6 block border-b border-zinc-200 pb-6 text-center text-2xl font-bold">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              actualSlug={actualSlug}
            />
          )
        })}
      </div>
    </aside>
  )
}
