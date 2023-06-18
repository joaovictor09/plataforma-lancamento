import { LessonDateAndHour } from './LessonDateAndHour'
import { LessonNumber } from './LessonNumber'

export function Schedule() {
  return (
    <div className="relative flex w-full justify-center overflow-hidden border-b  border-zinc-600 bg-gray-900 pb-10">
      <div className="absolute bottom-0 right-0 z-10 h-1/3 w-full bg-gradient-to-tr from-sky-500/40 to-transparent to-40%  blur-xl" />
      <div className="absolute bottom-0 left-0 z-10 h-1/3 w-full bg-gradient-to-tl from-blue-900/40 to-transparent to-40%  blur-xl" />

      <div className="z-20 mb-5 mt-10 flex w-full max-w-5xl flex-col items-center px-5 pb-10 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="mb-10 max-w-2xl text-center text-3xl font-light text-zinc-100">
          Aprendizado direto do{' '}
          <span className="bg-gradient-to-r from-sky-600 to-blue-900 bg-clip-text text-4xl font-extrabold text-transparent">
            campo de batalha
          </span>
        </h2>

        <div className="flex w-full flex-col gap-5">
          {/* Lesson 1 */}
          <div className="group relative w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/20 p-[1px] transition-opacity before:absolute before:inset-0 before:flex before:bg-gradient-to-l before:from-sky-500 before:to-blue-950 before:opacity-0 before:transition-opacity before:duration-300 before:hover:opacity-100">
            <div className="flex w-full flex-col gap-5 rounded-xl bg-gray-900 p-8 text-white backdrop-blur-lg">
              <div className="flex w-full flex-col-reverse items-center justify-between gap-5 lg:flex-row">
                <LessonDateAndHour date="05/06" hour="20h" />

                <LessonNumber number={'AULA 01'} />
              </div>

              <h3 className="text-2xl font-light">
                Como Prospectar Clientes e Fechar Vendas{' '}
                <b className="font-bold">Todos os Dias</b>
              </h3>
            </div>
          </div>

          {/* Lesson 2 */}
          <div className="relative w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/20 p-[1px] transition-opacity before:absolute before:inset-0 before:flex before:bg-gradient-to-l before:from-sky-500 before:to-blue-950 before:opacity-0 before:transition-opacity before:duration-300 before:hover:opacity-100">
            <div className="flex w-full flex-col gap-5 rounded-xl bg-gray-900 p-8 text-white backdrop-blur-lg">
              <div className="flex w-full flex-col-reverse items-center justify-between gap-5 lg:flex-row">
                <LessonDateAndHour date="07/06" hour="20h" />
                <LessonNumber number={'AULA 02'} />
              </div>

              <h3 className="text-2xl font-light">
                O Roteiro Ideal para Vender{' '}
                <b className="font-bold">Mais de 80 Contratos</b> por Mês
              </h3>
            </div>
          </div>

          {/* Lesson 3 */}
          <div className="relative w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/20 p-[1px] transition-opacity before:absolute before:inset-0 before:flex before:bg-gradient-to-l before:from-sky-500 before:to-blue-950 before:opacity-0 before:transition-opacity before:duration-300 before:hover:opacity-100">
            <div className="flex w-full flex-col gap-5 rounded-xl bg-gray-900 p-8 text-white backdrop-blur-lg">
              <div className="flex w-full flex-col-reverse items-center justify-between gap-5 lg:flex-row">
                <LessonDateAndHour date="09/06" hour="20h" />
                <LessonNumber number={'AULA 03'} />
              </div>

              <h3 className="text-2xl font-light">
                Como Quebrar as <b className="font-bold">Principais Objeções</b>{' '}
                e Ter
                <b className="font-bold"> Confiança no Fechamento</b>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
