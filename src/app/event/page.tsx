'use client'

import { useGetFirstLessonSlugQuery } from '@/graphql/types'
import { useRouter } from 'next/navigation'

export default function Event() {
  const router = useRouter()
  // const  = useGetFirstLessonSlugLazyQuery

  async function RedirectToFirstLesson() {
    useGetFirstLessonSlugQuery({
      onCompleted: (data) => {
        router.push(`event/lesson/${data.lessons[0].slug}`)
      },
    })
  }

  RedirectToFirstLesson()

  return (
    <div className="flex flex-1 items-center justify-center">
      <h1>Loading..</h1>
    </div>
  )
}
