import { EmailTemplate } from '@/app/components/EmailTemplate'
import { client } from '@/lib/apollo'
import { gql } from '@apollo/client'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function fetchCreateSubscriberMutation(name: string, email: string) {
  await client.query({
    query: gql`
      mutation CreateSubscriber($name: String!, $email: String!) {
        upsertSubscriber(
          where: { email: $email }
          upsert: { create: { name: $name, email: $email }, update: {} }
        ) {
          name
          email
        }
      }
    `,
    variables: { name, email },
    fetchPolicy: 'no-cache',
  })
}

async function sendConfirmationEmail({
  email,
  name,
}: {
  email: string
  name: string
}) {
  const data = await resend.sendEmail({
    from: 'contato@joaovictor09.dev',
    to: email,
    reply_to: 'contato@joaovictor09.dev',
    subject: `Quase lá, ${name}`,
    react: EmailTemplate({ firstName: name }),
  })

  return data
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const name = searchParams.get('name')

  try {
    const createSubscriberMutation = fetchCreateSubscriberMutation(name, email)
    const sendEmailFetch = sendConfirmationEmail({ email, name })

    await Promise.all([createSubscriberMutation, sendEmailFetch])

    return NextResponse.json({ status: 200, message: 'Success' })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
