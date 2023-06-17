import { Check } from 'lucide-react'
import Image from 'next/image'

import { CreateSubscriberForm } from '@/app/components/CreateSubscriberForm'

import Logo from '../../../assets/Logo.svg'
import HeroImage from '../../../assets/nagel.png'

export function Hero() {
  return (
    // Container
    <div className="relative h-full w-full">
      <div
        className=" mx-auto flex h-full min-h-[calc(100vh_-_10vh)] w-full max-w-5xl flex-row items-center justify-center text-zinc-100 md:justify-normal"
        id="register"
      >
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-blue-900 blur-full" />

        {/* Main */}
        <div className="flex w-full max-w-xl flex-col items-center gap-8 px-5 pt-10 md:items-start">
          <Image
            src={Logo}
            alt="Logo da Imersão vendas na prática"
            className="h-14 w-max"
          />
          <p className="mt-5 w-full max-w-[488px] text-3xl font-light md:text-4xl">
            Aprenda de forma simples e descomplicada{' '}
            <b className="font-bold">o segredo das grandes agências</b> para
            fechar mais de
            <b className="font-bold text-blue-900">
              {' '}
              80 contratos recorrentes{' '}
            </b>
            de gestão de tráfego por mês.
          </p>
          <div className="mt-5 flex max-w-md gap-4">
            <div className="flex items-center gap-2 text-lg font-light">
              <Check
                strokeWidth="2"
                className="h-5 w-5 rounded-full bg-blue-900 p-1"
              />
              <span>
                <b className="font-bold">05</b>, <b className="font-bold">07</b>{' '}
                e <b className="font-bold">09</b> de Junho
                <span>
                  {' '}
                  às <b className="font-bold">20h</b>
                </span>
              </span>
            </div>
          </div>

          <CreateSubscriberForm />
        </div>

        <div className="relative hidden aspect-square h-auto w-2/3 lg:flex">
          <div className="absolute right-1/2 top-1/2 aspect-square h-full w-auto -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-900/20 blur-3xl" />
          <Image src={HeroImage} alt="" className="absolute rounded-xl" />
        </div>
      </div>
    </div>
  )
}
