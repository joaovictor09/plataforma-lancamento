import Image from 'next/image'

export function WhoIs() {
  return (
    <div className="flex w-full justify-center bg-backgroung bg-cover pt-10 ">
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
            A maestria nas negociações me levou de um mero vendedor de picolé a
            CEO de uma das agências que mais geram vendas para micro empresas
            através do Google ADS no Brasil todo. A Blueberry Marketing Online
            triplicou o número de vendas, faturamento e lucratividade depois que
            descobri a receita para formar um GESTOR DE TRÁFEGO QUE VENDE. Hoje
            tenho a graça de compartilhar (sem cobrar nada) com outras centenas
            de gestores de tráfego que precisam vender para leads que chegam via
            marketing digital, o método me proporcionou viver com conforto,
            qualidade e lucratividade.
          </p>
          <a
            href="#register"
            className="inline-block w-max rounded bg-blue-900 px-12 py-3 text-sm font-bold text-white transition hover:bg-blue-950 focus:outline-none focus:ring focus:ring-blue-950"
          >
            Quero Participar
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
  )
}
