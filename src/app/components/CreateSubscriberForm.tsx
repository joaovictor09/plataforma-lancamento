'use client'

import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function CreateSubscriberForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()
    setLoading(true)

    const data = await fetch(`/api/send?name=${name}&email=${email}`)
    if (data.ok) {
      router.push('/thank-you')
    } else {
      window.alert('Erro ao se inscrever')
      setLoading(false)
    }
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
        {loading && <Loader className="animate-spin" size={20} />}
        <span>Garantir minha vaga</span>
      </button>
    </form>
  )
}
