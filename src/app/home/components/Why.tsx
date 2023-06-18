import {
  Banknote,
  Rocket,
  RotateCw,
  Smartphone,
  TrendingUp,
  Trophy,
} from 'lucide-react'
import { WhyCard } from './WhyCard'

export function Why() {
  return (
    <section className="flex w-full justify-center border-b border-zinc-700 bg-gradient-to-b from-gray-900 to-[#161616] text-white">
      <div className="mt-10 w-full max-w-5xl px-5 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-light sm:text-4xl">
            Este evento é pra{' '}
            <span className="bg-gradient-to-r from-sky-600 to-blue-900 bg-clip-text font-extrabold text-transparent">
              você
            </span>{' '}
            que quer
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <WhyCard props={{ title: 'Mais Vendas Para o Seu Negócio' }}>
            <Banknote size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard
            props={{
              title: 'Estratégias de Vendas Aplicadas e Testadas na Prática',
            }}
          >
            <TrendingUp size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard
            props={{
              title:
                'Atuar e Explorar os Benefícios dos Vários Canais de Venda',
            }}
          >
            <Smartphone size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard props={{ title: 'Estar à Frente dos Seus Concorrentes' }}>
            <Trophy size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard
            props={{ title: 'Conquistar a Fidelização dos Seus Clientes' }}
          >
            <RotateCw size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard props={{ title: 'Potencializar os Resultados' }}>
            <Rocket size={40} strokeWidth="1.5" />
          </WhyCard>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-blue-900 px-12 py-3 text-sm font-bold text-white transition hover:bg-blue-950 focus:outline-none focus:ring focus:ring-blue-950"
          >
            Quero Me Inscrever
          </a>
        </div>
      </div>
    </section>
  )
}
