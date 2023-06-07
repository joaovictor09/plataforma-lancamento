import Image from 'next/image'
import Logo from '../assets/Logo.svg'
import BackgroundImage from '../assets/bg-palestra.png'
import { Footer } from './components/Footer'
import {
  Banknote,
  Building2,
  Calendar,
  Clock8,
  Rocket,
  RotateCw,
  Smartphone,
  TrendingUp,
  Trophy,
  Users2,
} from 'lucide-react'
import { CreateSubscriberForm } from './components/CreateSubscriberForm'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-center bg-right-top bg-no-repeat lg:bg-hero">
      {/* Hero and form */}

      <div
        className=" relative mx-auto flex w-full flex-col items-center bg-cover bg-no-repeat pb-5 lg:bg-hero"
        id="register"
      >
        {/* Hero */}
        <div className={`bg -z-10 h-1/3 lg:hidden`}>
          <Image
            src={BackgroundImage}
            className="h-full w-auto"
            alt="Imagem com fundo de uma palestra sendo ministrada pelo Guilherme Nagel"
          />
        </div>

        <div className="flex w-full max-w-5xl flex-col items-center px-5 pt-10 lg:items-start">
          <Image
            src={Logo}
            alt="Logo da Imersão vendas na prática"
            className=""
          />
          <p className="mt-10 max-w-md text-3xl font-bold">
            Aprenda de forma simples e descomplicada o segredo das grandes
            agências para fechar mais de
            <span className="bg-blue-900 text-white">
              {' '}
              80 contratos recorrentes{' '}
            </span>
            de gestão de tráfego por mês.
          </p>
          <div className="mt-5 flex max-w-md gap-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Calendar size={32} strokeWidth="1.5" />
              05, 07 e 09 de Junho
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Clock8 size={32} strokeWidth="1.5" />
              20h
            </div>
          </div>

          <CreateSubscriberForm />
        </div>
      </div>

      {/* Marquee */}
      <div className="relative flex w-full  overflow-x-hidden bg-gray-700 text-xl font-bold text-white">
        <div className="flex animate-marquee gap-4 whitespace-nowrap py-12">
          <span className="">DO ZERO AO AVANÇADO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">GRUPO DE WHATSAPP EXCLUSIVO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">ONLINE E 100% GRATUITO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">PDF DO CONTEÚDO DAS AULAS</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">DO ZERO AO AVANÇADO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">GRUPO DE WHATSAPP EXCLUSIVO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">ONLINE E 100% GRATUITO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">PDF DO CONTEÚDO DAS AULAS</span>
          <div className="h-full w-1 bg-blue-900" />
        </div>
        <div className="absolute top-0 ml-4 flex h-full animate-marquee2 space-x-4 whitespace-nowrap py-12">
          <span className="">DO ZERO AO AVANÇADO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">GRUPO DE WHATSAPP EXCLUSIVO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">ONLINE E 100% GRATUITO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">PDF DO CONTEÚDO DAS AULAS</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">DO ZERO AO AVANÇADO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">GRUPO DE WHATSAPP EXCLUSIVO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">ONLINE E 100% GRATUITO</span>
          <div className="h-full w-1 bg-blue-900" />
          <span className="">PDF DO CONTEÚDO DAS AULAS</span>
          <div className="h-full w-1 bg-blue-900" />
        </div>
      </div>

      {/* Lessons */}

      <div className="mb-5 mt-10 w-full max-w-5xl px-5">
        <h2 className="mb-10 max-w-lg text-5xl font-bold">
          Aprendizado direto do campo de batalha
        </h2>

        <div className="flex w-full flex-col gap-5">
          {/* Lesson 1 */}
          <div className="flex w-full flex-col gap-5 rounded bg-blue-900 p-5 text-white">
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              {/* Mobile Span */}
              <span className="mb-5 rounded bg-white p-2 text-4xl font-bold text-blue-900 lg:hidden">
                AULA 01
              </span>

              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Calendar size={32} strokeWidth="2" />
                  05/06
                </div>
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Clock8 size={32} strokeWidth="2" />
                  20h
                </div>
              </div>
              <span className="hidden rounded bg-white p-2 text-4xl font-bold text-blue-900 lg:flex">
                AULA 01
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              COMO PROSPECTAR CLIENTES E FECHAR VENDAS TODOS OS DIAS
            </h3>
            <p className="text-xl font-light">
              Precisa fazer inúmeras ligações para fechar uma venda? Trabalha
              que nem &quot;um cavalo véio 🐎&quot; e não tem resultado? Se isso
              acontece com você, pode ter certeza, está errando na forma de
              prospectar. Não tem nada de errado em fazer prospeção fria! Só que
              tem técnica, tem atalhos e formas de fazer que aumentam muito a
              sua taxa de conversão e vou ensinar tudo isso nessa aula.
            </p>
          </div>

          {/* Lesson 2 */}
          <div className="flex w-full flex-col gap-5 rounded bg-blue-900 p-5 text-white">
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <span className="mb-5 rounded bg-white p-2 text-4xl font-bold text-blue-900 lg:hidden">
                AULA 02
              </span>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Calendar size={32} strokeWidth="2" />
                  07/06
                </div>
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Clock8 size={32} strokeWidth="2" />
                  20h
                </div>
              </div>
              <span className="hidden rounded bg-white p-2 text-4xl font-bold text-blue-900 lg:flex">
                AULA 02
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              O ROTEIRO IDEAL PARA VENDER MAIS DE 80 CONTRATOS POR MÊS
            </h3>
            <p className="text-xl font-light">
              Nessa aula vou abrir o script de vendas de madeira detalhada para
              você aprender de forma clara como vender e fechar mais de 80
              contratos por mês.
            </p>
          </div>

          {/* Lesson 3 */}
          <div className="flex w-full flex-col gap-5 rounded bg-blue-900 p-5 text-white">
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              {/* Mobile Span */}
              <span className="mb-5 rounded bg-white p-2 text-4xl font-bold text-blue-900 lg:hidden">
                AULA 03
              </span>

              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Calendar size={32} strokeWidth="2" />
                  09/06
                </div>
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Clock8 size={32} strokeWidth="2" />
                  20h
                </div>
              </div>
              <span className="hidden rounded bg-white p-2 text-4xl font-bold text-blue-900 lg:flex">
                AULA 03
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              COMO QUEBRAR AS PRINCIPAIS OBJEÇÕES E TER CONFIANÇA NO FECHAMENTO
            </h3>
            <p className="text-xl font-light">
              Provavelmente você já passou pela situação de estar quase com uma
              venda fechada e ter escutado um “vou pensar”, “volto depois” e o
              famoso tá caro frases como essas que acabaram impedindo uma venda.
              Nessa aula eu vou te ensinar a matar as principais objeções.
            </p>
          </div>
        </div>
      </div>

      {/* Este evento é pra você que quer */}
      <div className="mt-10 w-full max-w-5xl px-5">
        <h2 className="mb-10 max-w-lg text-5xl font-bold">
          Este evento é pra você que quer
        </h2>

        <div className="grid w-full grid-cols-1 flex-col gap-10 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-2 overflow-hidden rounded border-2 border-blue-900 text-center transition-all hover:scale-105 hover:bg-blue-900 hover:text-white md:flex-row">
            <div className="flex h-fit w-full items-center justify-center bg-blue-900 px-5 py-2 text-white md:h-full md:w-fit">
              <Banknote size={48} strokeWidth="1.5" />
            </div>
            <span className="px-3 py-5 text-xl font-bold">
              MAIS VENDAS PARA SEU NEGÓCIO
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 overflow-hidden rounded border-2 border-blue-900 text-center transition-all hover:scale-105 hover:bg-blue-900 hover:text-white md:flex-row">
            <div className="flex h-fit w-full items-center justify-center bg-blue-900 px-5 py-2 text-white md:h-full md:w-fit">
              <TrendingUp size={48} strokeWidth="1.5" />
            </div>
            <span className="px-3 py-5  text-xl font-bold">
              ESTRATÉGIAS DE VENDAS APLICADAS E TESTADAS NA PRÁTICA
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 overflow-hidden rounded border-2 border-blue-900 text-center transition-all hover:scale-105 hover:bg-blue-900 hover:text-white md:flex-row">
            <div className="flex h-fit w-full items-center justify-center bg-blue-900 px-5 py-2 text-white md:h-full md:w-fit">
              <Building2 size={48} strokeWidth="1.5" />
            </div>
            <span className="px-3 py-5 text-xl font-bold">
              INVESTIR NO FUTURO DA SUA EMPRESA
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 overflow-hidden rounded border-2 border-blue-900 text-center transition-all hover:scale-105 hover:bg-blue-900 hover:text-white md:flex-row">
            <div className="flex h-fit w-full items-center justify-center bg-blue-900 px-5 py-2 text-white md:h-full md:w-fit">
              <Smartphone size={48} strokeWidth="1.5" />
            </div>
            <span className="px-3 py-5 text-xl font-bold">
              ATUAR E EXPLORAR OS BENEFÍCIOS DOS VÁRIOS CANAIS DE VENDA
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 overflow-hidden rounded border-2 border-blue-900 text-center transition-all hover:scale-105 hover:bg-blue-900 hover:text-white md:flex-row">
            <div className="flex h-fit w-full items-center justify-center bg-blue-900 px-5 py-2 text-white md:h-full md:w-fit">
              <Trophy size={48} strokeWidth="1.5" />
            </div>
            <span className="px-3 py-5 text-xl font-bold">
              ESTAR À FRENTE DOS SEUS CONCORRENTES
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 overflow-hidden rounded border-2 border-blue-900 text-center transition-all hover:scale-105 hover:bg-blue-900 hover:text-white md:flex-row">
            <div className="flex h-fit w-full items-center justify-center bg-blue-900 px-5 py-2 text-white md:h-full md:w-fit">
              <RotateCw size={48} strokeWidth="1.5" />
            </div>
            <span className="px-3 py-5 text-xl font-bold">
              CONQUISTAR A FIDELIZAÇÃO DOS SEUS CLIENTES
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 overflow-hidden rounded border-2 border-blue-900 text-center transition-all hover:scale-105 hover:bg-blue-900 hover:text-white md:flex-row">
            <div className="flex h-fit w-full items-center justify-center bg-blue-900 px-5 py-2 text-white md:h-full md:w-fit">
              <Rocket size={48} strokeWidth="1.5" />
            </div>
            <span className="px-3 py-5 text-xl font-bold">
              POTENCIALIZAR OS RESULTADOS
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 overflow-hidden rounded border-2 border-blue-900 text-center transition-all hover:scale-105 hover:bg-blue-900 hover:text-white md:flex-row">
            <div className="flex h-fit w-full items-center justify-center bg-blue-900 px-5 py-2 text-white md:h-full md:w-fit">
              <Users2 size={48} strokeWidth="1.5" />
            </div>
            <span className="px-3 py-5 text-xl font-bold">
              CONSTRUIR UMA EQUIPE DE ALTO DESEMPENHO
            </span>
          </div>
        </div>
      </div>

      {/* Guilherme Nagel */}

      <div className="mt-10 flex w-full justify-center bg-backgroung bg-cover pt-10">
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
