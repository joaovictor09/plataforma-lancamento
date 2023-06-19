import classNames from 'classnames'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Link from 'next/link'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
  actualSlug: string
}

export function Lesson({
  actualSlug,
  availableAt,
  slug,
  title,
  type,
}: LessonProps) {
  // console.log(params)
  // const slug = params.slug

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd ' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    },
  )

  const isActiveLesson = actualSlug === slug
  // const isActiveLesson = true

  return (
    <div>
      {isLessonAvailable ? (
        <Link href={`/event/lesson/${slug}`} className="group">
          <span className="text-gray-200">{availableDateFormatted}</span>
          <div
            className={classNames(
              'mt-2 flex flex-col gap-4 rounded border border-blue-900  p-4 transition-colors group-hover:border-blue-900/70',
              {
                'bg-blue-900': isActiveLesson,
                // 'bg-gray-700': !isActiveLesson,
              },
            )}
          >
            <header className="flex items-center justify-between">
              <span
                className={classNames(
                  'flex  items-center gap-2 text-sm font-medium',
                  {
                    'text-white': isActiveLesson,
                  },
                )}
              >
                {/* <CheckCircle size={20}/> */}
                Conteúdo Liberado
              </span>

              <span
                className={classNames(
                  'rounded border px-2 py-[0.125rem] text-xs font-bold',
                  {
                    'border-white text-white': isActiveLesson,
                    'border-blue-900 text-zinc-100': !isActiveLesson,
                  },
                )}
              >
                {type === 'live' ? 'LIVE AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>
            <span
              className={classNames('font-bold leading-relaxed text-zinc-100', {
                'text-white': isActiveLesson,
              })}
            >
              {title}
            </span>
          </div>
        </Link>
      ) : (
        <>
          <span className="text-gray-200">{availableDateFormatted}</span>
          <div className="mt-2 flex flex-col gap-4 rounded border border-zinc-600 bg-gray-600 p-4 transition-colors hover:cursor-not-allowed group-hover:border-green-500">
            <header className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium text-zinc-200 group-hover:cursor-not-allowed">
                {/* <Lock size={20}/> */}
                Em breve
              </span>
              <span className="rounded border border-zinc-600 px-2 py-[0.125rem] text-xs font-bold text-zinc-200">
                {type === 'live' ? 'LIVE AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>
            <span className="font-bold leading-relaxed text-zinc-200">
              {title}
            </span>
          </div>
        </>
      )}
    </div>
  )
}
