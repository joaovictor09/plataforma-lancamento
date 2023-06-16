import Image from 'next/image'

import { Footer } from '../components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Schedule } from './components/Schedule'
import { Why } from './components/Why'

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-center bg-right-top bg-no-repeat lg:bg-hero">
      <Hero />
      <Marquee />
      <Schedule />
      <Why />

      {/* Guilherme Nagel */}

      <div className="flex w-full justify-center bg-backgroung bg-cover pt-10">
        <div className="flex w-full max-w-[1180px] flex-col items-center justify-between px-5 lg:flex-row">
          <Image
            src="https://www.guilhermenagel.com.br/wp-content/uploads/00426-media.png"
            height={640}
            width={426}
            alt="Foto do Guilherme Nagel"
            className="h-[640px / 2] hidden lg:flex"
          />
          <div className="flex flex-col gap-5 text-white">
            <strong className="text-3xl font-bold">Guilherme Nagel</strong>
            <p className="max-w-xl text-lg">
              A maestria nas negociações me levou de um mero vendedor de picolé
              a CEO de uma das agências que mais geram vendas para micro
              empresas através do Google ADS no Brasil todo. A Blueberry
              Marketing Online triplicou o número de vendas, faturamento e
              lucratividade depois que descobri a receita para formar um GESTOR
              DE TRÁFEGO QUE VENDE. Hoje tenho a graça de compartilhar (sem
              cobrar nada) com outras centenas de gestores de tráfego que
              precisam vender para leads que chegam via marketing digital, o
              método me proporcionou viver com conforto, qualidade e
              lucratividade.
            </p>
            <a
              href="#register"
              className="flex w-max self-center rounded bg-blue-900 px-10 py-5 font-bold sm:self-start"
            >
              QUERO PARTICIPAR
            </a>
          </div>
          <Image
            src="https://www.guilhermenagel.com.br/wp-content/uploads/00426-media.png"
            height={640}
            width={426}
            alt="Foto do Guilherme Nagel"
            className="h-[calc(640px / 2)] lg:hidden"
          />
        </div>
      </div>

      <Footer variant="dark" />
    </main>
  )
}
