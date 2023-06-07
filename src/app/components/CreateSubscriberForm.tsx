'use client'

import { client } from '@/lib/apollo'
import { gql } from '@apollo/client'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, FormEvent } from 'react'

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

export function CreateSubscriberForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()
    setLoading(true)

    await fetchCreateSubscriberMutation(name, email)

    router.push('/thank-you')
    setLoading(false)
  }
  return (
    <form
      className="mt-5 flex w-full max-w-md flex-col gap-2"
      onSubmit={handleSubscribe}
    >
      <input
        className="h-14 rounded border border-zinc-600 bg-zinc-200 px-5 outline-none ring-0 placeholder:text-zinc-700 focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
        type="text"
        placeholder="Seu nome completo"
        required
        minLength={3}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="h-14 rounded border border-zinc-600 bg-zinc-200 px-5 outline-none ring-0 placeholder:text-zinc-700 focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
        type="email"
        required
        placeholder="Digite seu email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <button
        type="submit"
        className="mt-4 flex items-center justify-center gap-4 rounded bg-blue-900 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={loading}
      >
        {loading && <Loader className="animate-spin" />}
        <span>Garantir minha vaga</span>
      </button>
    </form>
  )
}
