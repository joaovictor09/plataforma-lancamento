import Image from 'next/image'
import Logo from '../../assets/Logo.svg'
import { Footer } from '../components/Footer'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import whatsappLogo from '../../assets/icons/whatsapp.svg'
import { WhoIs } from '../home/components/WhoIs'

export default function ThankYou() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center text-zinc-100">
      {/* Hero */}

      <div
        className="relative flex h-[90vh] w-full flex-col items-center justify-center border-b border-zinc-600 bg-background-2 bg-cover bg-no-repeat"
        id="register"
      >
        <div className="absolute h-full w-full bg-gradient-to-b from-gray-900/80 to-gray-900" />

        <div className="z-10 flex w-full max-w-lg flex-col items-start justify-center gap-10 px-5 pb-10 pt-10">
          <Image
            src={Logo}
            alt="Logo da Imersão vendas na prática"
            className="h-14 w-max"
          />

          <strong className="max-w-md text-4xl font-normal">
            Falta apenas <b className="font-bold">um passo</b> para você{' '}
            <b className="font-bold">garantir sua inscrição</b> no evento.
          </strong>

          <p className="text-xl font-light">
            Entre no grupo do WhatsApp e garanta sua vaga.{' '}
            <b className="font-bold">Clique no botão abaixo.</b>
          </p>

          <a
            href="https://devzapp.com.br/#/dev-zap-grupos/61ce10a2e3d339000121f7ac"
            target="_blank"
            className="flex w-full items-center justify-center gap-2 rounded bg-blue-900 px-10 py-5 font-bold text-white transition-all hover:scale-105 hover:bg-blue-950"
            rel="noreferrer"
          >
            <Image src={whatsappLogo} height={20} alt="Whatsapp logo Logo" />
            <span>ENTRE NO GRUPO DO EVENTO</span>
          </a>
        </div>
      </div>

      {/* Não fique de fora da imersão. */}

      <div
        className="relative flex w-full flex-col items-center justify-center border-b border-zinc-600 bg-gradient-to-b from-gray-900 from-80% to-[#161616] px-5 pb-16 pt-16"
        id="complete"
      >
        <div className="absolute right-1/2 top-0 z-50 flex -translate-y-1/2 translate-x-1/2">
          <a
            href="#complete"
            className="animate-bounce rounded-full bg-blue-900 p-3 text-zinc-100"
          >
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>

        <div className="flex w-full max-w-5xl flex-col items-center justify-center">
          <h2 className="w-full max-w-xl pb-10 text-center text-4xl font-normal">
            Não fique de fora da{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-900 bg-clip-text font-extrabold text-transparent">
              imersão
            </span>
            .
          </h2>

          <div className="flex w-full flex-col gap-10">
            {/* Whatsapp Group */}

            <div className="flex flex-col items-center gap-6 rounded-xl border border-gray-800 p-8 text-center shadow-xl transition hover:border-blue-900/20 hover:shadow-blue-900/10">
              <span className="rounded p-2 text-3xl font-medium ">
                Entre no Grupo de Whatsapp
              </span>

              <p className="text-xl font-light">
                Toque no botão abaixo para entrar no grupo silenciado de
                WhatsApp. É <b className="font-bold">importante</b> estar no
                grupo para receber{' '}
                <b className="font-bold">
                  todos os avisos e materiais das aulas
                </b>
                .
              </p>

              <a
                href="https://devzapp.com.br/#/dev-zap-grupos/61ce10a2e3d339000121f7ac"
                target="_blank"
                className="inline-block w-max rounded bg-blue-900 px-12 py-3 text-xl font-bold text-white transition hover:bg-blue-950 focus:outline-none focus:ring focus:ring-blue-950"
                rel="noreferrer"
              >
                Quero Participar
              </a>
            </div>

            {/* Check email */}

            <div className="flex flex-col items-center gap-6 rounded-xl border border-gray-800 p-8 text-center shadow-xl transition hover:border-blue-900/20 hover:shadow-blue-900/10">
              <span className="rounded p-2 text-3xl font-medium ">
                Confirme seu E-mail
              </span>

              <p className="text-xl font-light">
                Eu acabei de te enviar um e-mail com o assunto: “
                <b className="font-bold">
                  [Inscrição Confirmada] Imersão Vendas na Prática + Avisos
                  Importantes
                </b>
                ”. Abra esse e-mail para{' '}
                <b className="font-bold">confirmar o seu cadastro</b> no evento.
              </p>
            </div>

            {/* Check Platform */}
            <div className="w-full rounded-xl border border-gray-800 bg-gradient-to-r from-sky-500 to-blue-950 p-[1px]">
              <div className="flex flex-col items-center gap-6 rounded-xl bg-gray-900 p-8 text-center shadow-xl transition hover:border-blue-900/20 hover:shadow-blue-900/10">
                <span className="rounded p-2 text-3xl font-medium ">
                  Confira nossa plataforma exclusiva
                </span>

                <p className="text-xl font-light">
                  Depois de fazer{' '}
                  <b className="font-bold">todos os passos anteriores</b>, entre
                  na nossa <b className="font-bold">plataforma exclusiva</b>,
                  onde vamos liberar as{' '}
                  <b className="font-bold">aulas e os materias gratuitos</b>.
                </p>

                <Link
                  href="/event"
                  className="inline-block w-max rounded bg-blue-900 px-12 py-3 text-xl font-bold text-white transition hover:bg-blue-950 focus:outline-none focus:ring focus:ring-blue-950"
                >
                  Entrar na plataforma
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guilherme Nagel */}

      <WhoIs />

      <Footer variant="dark" />
    </main>
  )
}
