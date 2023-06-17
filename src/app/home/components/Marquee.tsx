import { ChevronDown } from 'lucide-react'

export function Marquee() {
  return (
    <div className="relative mt-16 w-full border-b border-t border-zinc-600 bg-gray-700 md:mt-10">
      <div className="absolute right-1/2 top-0 z-50 flex -translate-y-1/2 translate-x-1/2">
        <a
          href="#marquee"
          className="animate-bounce rounded-full bg-blue-900 p-3 text-zinc-100"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>

      <div
        id="marquee"
        className="relative flex w-full  overflow-x-hidden text-xl font-bold text-white"
      >
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
    </div>
  )
}
