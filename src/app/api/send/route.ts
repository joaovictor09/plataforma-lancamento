import { EmailTemplate } from '@/app/components/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const name = searchParams.get('name')

  try {
    const data = await resend.sendEmail({
      from: 'contato@joaovictor09.dev',
      to: email,
      reply_to: 'contato@joaovictor09.dev',
      subject: `Quase lá, ${name}`,
      react: EmailTemplate({ firstName: name }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
