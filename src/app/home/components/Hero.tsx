import { Calendar, Clock8 } from 'lucide-react'
import Image from 'next/image'

import { CreateSubscriberForm } from '@/app/components/CreateSubscriberForm'

import Logo from '../../../assets/Logo.svg'
import BackgroundImage from '../../../assets/bg-palestra.png'

export function Hero() {
  return (
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

      <div className="flex w-full max-w-5xl flex-col items-center px-5 pt-10 sm:px-6 sm:py-12 lg:items-start lg:px-8">
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
  )
}
