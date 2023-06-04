import { Calendar, Clock8 } from 'lucide-react'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import Logo from '../../assets/Logo.svg'

import whatsappLogo from '../../assets/icons/whatsapp.svg'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-center">
      {/* Hero and form */}

      <div
        className=" relative flex w-full flex-col items-center justify-center bg-background-2 bg-cover bg-no-repeat py-40"
        id="register"
      >
        {/* Hero */}
        <div className={`bg -z-10 h-1/3 lg:hidden`}>
          {/* <Image
            src={BackgroundImage}
            className="h-full w-auto"
            alt="Imagem com fundo de uma palestra sendo ministrada pelo Guilherme Nagel"
          /> */}
        </div>

        <div className="flex w-full max-w-lg flex-col items-center justify-center px-5 pt-10 text-center">
          <Image
            src={Logo}
            alt="Logo da Imersão vendas na prática"
            className=""
          />
          <strong className="mt-10 max-w-md text-3xl font-bold">
            Falta apenas um passo para você garantir sua inscrição no evento.
          </strong>
          <p className="mt-5 text-xl">
            Entre no grupo do WhatsApp e garanta sua vaga.{' '}
            <b>Clique no botão abaixo.</b>
          </p>
          <a
            href="https://devzapp.com.br/#/dev-zap-grupos/61ce10a2e3d339000121f7ac"
            target="_blank"
            className="mt-5 flex items-center gap-2 rounded bg-blue-900 px-10 py-5 font-bold text-white transition-all hover:scale-105"
            rel="noreferrer"
          >
            <Image src={whatsappLogo} height={24} alt="Whatsapp logo Logo" />
            <span>ENTRE NO GRUPO DO EVENTO</span>
          </a>
        </div>
      </div>

      {/* Não fique de fora da imersão. */}

      <div className="mb-5 mt-10 w-full max-w-5xl px-5">
        <h2 className="mb-10 max-w-lg text-5xl font-bold">
          Não fique de fora da imersão.
        </h2>

        <div className="flex w-full flex-col gap-5">
          {/* Whatsapp Group */}
          <div className="flex w-full flex-col gap-5 rounded bg-blue-900 p-7 text-white">
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <span className="hidden rounded p-2 text-4xl font-bold lg:flex">
                ENTRE NO GRUPO DE WHATSAPP
              </span>
            </div>

            <p className="text-xl font-light">
              Toque no botão abaixo para entrar no grupo silenciado de WhatsApp.
              É importante estar no grupo para receber todos os avisos e
              materiais das aulas.
            </p>

            <a
              href="https://devzapp.com.br/#/dev-zap-grupos/61ce10a2e3d339000121f7ac"
              target="_blank"
              className="mt-5 flex w-max items-center gap-2 rounded bg-white px-10 py-5 text-lg font-bold text-blue-900 transition-all hover:scale-105"
              rel="noreferrer"
            >
              ENTRE NO GRUPO DO EVENTO
            </a>
          </div>

          {/* Check email */}
          <div className="flex w-full flex-col gap-5 rounded bg-blue-900 p-7 text-white">
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <span className="hidden rounded text-4xl font-bold lg:flex">
                CONFIRME SEU E-MAIL
              </span>
            </div>

            <p className="text-xl font-light">
              Eu acabei de te enviar um e-mail com o assunto: “
              <b>
                [Inscrição Confirmada] Imersão Vendas na Prática + Avisos
                Importantes
              </b>
              ”. Abra esse e-mail para confirmar o seu cadastro no evento.
            </p>
          </div>

          {/* Check Platform */}
          <div className="flex w-full flex-col gap-5 rounded bg-blue-900 p-7 text-white">
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <span className="hidden rounded p-2 text-4xl font-bold lg:flex">
                Confira nossa plataforma exclusiva
              </span>
            </div>

            <p className="text-xl font-light">
              Depois de fazer todos os passos anteriores, entre na nossa
              plataforma exclusiva, onde vamos liberar as aulas e os materias
              gratuitos.
            </p>

            <Link
              href="/event"
              className="mt-5 flex w-max items-center gap-2 rounded bg-white px-10 py-5 text-lg font-bold text-blue-900 transition-all hover:scale-105"
            >
              ENTRAR NA PLATAFORMA
            </Link>
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
              href="https://devzapp.com.br/#/dev-zap-grupos/61ce10a2e3d339000121f7ac"
              target="_blank"
              className="mt-5 flex w-max items-center gap-2 rounded bg-blue-900 px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105"
              rel="noreferrer"
            >
              ENTRE NO GRUPO DO WHATSAPP
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
