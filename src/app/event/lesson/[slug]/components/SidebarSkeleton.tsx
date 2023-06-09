import { LessonSkeleton } from './LessonSkeleton'

export async function SidebarSkeleton() {
  return (
    <aside className="border-l border-zinc-200 bg-zinc-50 p-6 xl:w-[348px]">
      <span className="mb-6 block border-b border-zinc-200 pb-6 text-center text-2xl font-bold">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {Array.from({ length: 4 }).map((it, index) => (
          <LessonSkeleton key={index} />
        ))}
      </div>
    </aside>
  )
}
