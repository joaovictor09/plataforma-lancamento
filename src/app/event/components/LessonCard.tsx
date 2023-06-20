import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface LessonCardProps {
  title: string
  description: string
  slug: string
  thumbImage?: string
  lessonNumber: number
  totalLessonQuantity: number
  index: number
}

export function LessonCard({
  description,
  slug,
  title,
  thumbImage,
  lessonNumber,
  totalLessonQuantity,
  index,
}: LessonCardProps) {
  return (
    <div
      className={`group relative flex w-full flex-col gap-2 overflow-hidden rounded-xl transition-all`}
    >
      <div className="relative">
        <Image
          src={
            thumbImage ||
            'https://clubeusmle.com/wp-content/uploads/capa01-media.jpeg'
          }
          placeholder="empty"
          alt=""
          width={300}
          height={300}
          quality={100}
          className="w-full rounded-xl bg-cover transition-all"
        />
        <div className="absolute inset-0 flex w-full flex-col items-start justify-between bg-gray-900/90 p-3 opacity-0 transition-all group-hover:opacity-100">
          <div className="flex w-full items-center justify-between">
            <span className="font-bold text-green-600">100% Relevante</span>
            <span>
              Episódio <b>{lessonNumber}</b> de <b>{totalLessonQuantity}</b>
            </span>
          </div>
          <p className="line-clamp-4">{description}</p>

          <Link
            href={`/event/lesson/${slug}`}
            className="flex w-max items-center gap-2 rounded-md bg-zinc-100 px-5 py-3 text-black"
          >
            <Play className="fill-black text-black" /> Assistir
          </Link>
        </div>
      </div>
      <h3 className="z-50 p-2 text-xl font-bold">{title}</h3>
    </div>
  )
}
