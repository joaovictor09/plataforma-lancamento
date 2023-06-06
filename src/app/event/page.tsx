'use client'

import { client } from '@/lib/apollo'
import { gql } from '@apollo/client'
import { redirect } from 'next/navigation'
import { use } from 'react'

async function fetchFirstLessonSlug() {
  const { data } = await client.query({
    query: gql`
      query GetFirstLessonSlug {
        lessons(orderBy: availableAt_ASC, first: 1) {
          slug
        }
      }
    `,
    fetchPolicy: 'no-cache',
  })

  return data
}

export default function Event() {
  const firstLessonSlug = use(fetchFirstLessonSlug())
  const slug = firstLessonSlug.lessons[0].slug
  redirect(`event/lesson/${slug}`)
}
