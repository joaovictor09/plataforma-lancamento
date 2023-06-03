'use client'

// import { FormEvent, useState } from "react";
import { FormEvent, useState } from 'react'
import Logo from '../assets/Logo.svg'
import { useCreateSubscriberMutation } from '../graphql/types'

import codeMockup from '../assets/code-mockup.png'
import { Footer } from './components/Footer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Loader } from 'lucide-react'

export default function Home() {
  // const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()
  const router = useRouter()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      },
    })

    router.push('/event')
  }

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* CONTENT DIV */}

      <div className="flex w-full flex-1 flex-col">
        <div className="mx-auto mt-10 flex w-full max-w-[1180px] flex-col items-center justify-between gap-6 px-28 sm:px-14 md:flex-row lg:mt-20 2xl:px-0">
          {/* TEXT AND LOGO DIV */}

          <div className="flex max-w-[640px] flex-col items-center px-6 text-center md:items-start md:text-left ">
            <Image
              src={Logo}
              height={60}
              alt="Logo da mentoria do Guilherme Nagel"
            />

            <h1 className="mt-8 text-3xl text-[2.5rem] leading-tight lg:text-4xl">
              Aprenda de forma{' '}
              <strong className="text-blue-900">simples</strong> e{' '}
              <strong className="text-blue-900">descomplicada</strong>
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-gray-600 lg:text-base">
              Em apenas uma semana você vai aprender forma simples e
              descomplicada o segredo das grandes agências para fechar mais de
              80 contratos recorrentes de gestão de tráfego por mês.
            </p>
          </div>

          {/* FORM DIV */}

          <div className="w-screen border-y border-gray-100 bg-zinc-200 p-8 shadow-md shadow-blue-900 sm:w-full sm:rounded sm:border">
            <strong className="mb-6 block text-2xl">
              Inscreva-se gratuitamente
            </strong>

            <form
              className="flex w-full flex-col gap-2"
              onSubmit={handleSubscribe}
            >
              <input
                className="h-14 rounded border border-zinc-400 bg-transparent px-5 outline-none ring-0 placeholder:text-zinc-500 focus:border-blue-900"
                type="text"
                placeholder="Seu nome completo"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="h-14 rounded border border-zinc-400 bg-transparent px-5 outline-none ring-0 placeholder:text-zinc-500 focus:border-blue-900"
                type="email"
                placeholder="Digite seu email"
                onChange={(event) => setEmail(event.target.value)}
              />

              <button
                type="submit"
                className="mt-4 rounded bg-blue-900 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={loading}
              >
                {loading && <Loader className="animate-spin" />}
                <span>Garantir minha vaga</span>
              </button>
            </form>
          </div>
        </div>

        <div className="relative mt-auto flex w-full">
          <div className="absolute z-10 flex h-full w-full bg-gradient-to-t from-zinc-50/0 from-80% to-zinc-50"></div>
          <Image
            className=" bg-gradient-to-t from-zinc-50 from-10% via-zinc-50 via-90% to-zinc-50/0"
            src={codeMockup}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
