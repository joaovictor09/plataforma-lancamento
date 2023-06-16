import {
  Banknote,
  Building2,
  Rocket,
  RotateCw,
  Smartphone,
  TrendingUp,
  Trophy,
  Users2,
} from 'lucide-react'
import { WhyCard } from './WhyCard'

export function Why() {
  return (
    <section className="flex w-full justify-center bg-gradient-to-b from-gray-900 to-[#161616] text-white">
      <div className="mt-10 w-full max-w-5xl px-5 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Este evento é pra você que quer
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <WhyCard props={{ title: 'Mais Vendas Para Seu Negócio' }}>
            <Banknote size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard
            props={{
              title: 'Estratégias De Vendas Aplicadas E Testadas Na Prática',
            }}
          >
            <TrendingUp size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard props={{ title: 'Investir No Futuro Da Sua Empresa' }}>
            <Building2 size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard
            props={{
              title:
                'Atuar E Explorar Os Benefícios Dos Vários Canais De Venda',
            }}
          >
            <Smartphone size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard props={{ title: 'Estar À Frente Dos Seus Concorrentes' }}>
            <Trophy size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard
            props={{ title: 'Conquistar a Fidelização Dos Seus Clientes' }}
          >
            <RotateCw size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard props={{ title: 'Potencializar Os Resultados' }}>
            <Rocket size={40} strokeWidth="1.5" />
          </WhyCard>

          <WhyCard props={{ title: 'Construir Uma Equipe De Alto Desempenho' }}>
            <Users2 size={40} strokeWidth="1.5" />
          </WhyCard>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-blue-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-950 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Quero Me Inscrever
          </a>
        </div>
      </div>
    </section>
  )
}
