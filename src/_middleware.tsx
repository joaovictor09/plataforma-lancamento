import { gql } from '@apollo/client'
import { NextResponse, type NextRequest } from 'next/server'
import { client } from './lib/apollo'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/event' || pathname === '/event/lesson') {
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

    const firstLessonSlug = data.lessons[0].slug
    const redirectUrl = new URL(
      `/event/lesson/${firstLessonSlug}`,
      request.nextUrl.origin,
    )

    return NextResponse.redirect(redirectUrl)
  }
}

export const config = {
  matcher: ['/event', '/event/lesson/:pathname*'],
}
