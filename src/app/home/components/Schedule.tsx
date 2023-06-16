import { Calendar, Clock8 } from 'lucide-react'

export function Schedule() {
  return (
    <div className="relative flex w-full justify-center border-b border-t border-zinc-600 bg-gray-900 pb-10 ">
      <div className="absolute bottom-0 right-0 z-10 h-[20%] w-full bg-gradient-to-tr from-sky-600/40 to-gray-900/10 to-40%" />
      <div className="absolute bottom-0 left-0 z-10 h-[20%] w-full bg-gradient-to-tl from-blue-900/40 to-transparent to-40%" />

      <div className="z-20 mb-5 mt-10 flex w-full max-w-5xl flex-col items-center px-2 pb-10 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="mb-10 max-w-lg text-center text-3xl font-bold text-zinc-100">
          Aprendizado direto do campo de batalha
        </h2>

        <div className="flex w-full flex-col gap-5">
          {/* Lesson 1 */}
          <div className="w-full rounded-xl border border-gray-800 bg-transparent p-[1px] transition-[1s] duration-[20000] ease-in hover:border-gray-900 hover:bg-gradient-to-l hover:from-sky-500 hover:to-blue-950">
            <div className="flex w-full flex-col gap-5 rounded-xl bg-gray-900 p-8 text-white shadow-xl backdrop-blur-lg">
              <div className="flex w-full flex-col-reverse items-center justify-between gap-5 lg:flex-row">
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

                <div className="w-max rounded-xl border border-gray-800 bg-gradient-to-r from-sky-500 to-blue-950 p-[1px]">
                  <div className="back flex w-full items-center justify-center rounded-xl bg-gray-900 p-5">
                    <span className=" bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-xl font-extrabold text-transparent">
                      AULA 01
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold">
                Como Prospectar Clientes e Fechar Vendas Todos os Dias
              </h3>
            </div>
          </div>

          {/* Lesson 2 */}
          <div className="w-full rounded-xl border border-gray-800 bg-transparent p-[1px] transition-[1s] duration-[20000] ease-in hover:border-gray-900 hover:bg-gradient-to-l hover:from-sky-500 hover:to-blue-950">
            <div className="flex w-full flex-col gap-5 rounded-xl bg-gray-900 p-8 text-white shadow-xl backdrop-blur-lg">
              <div className="flex w-full flex-col-reverse items-center justify-between gap-5 lg:flex-row">
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

                <div className="w-max rounded-xl border border-gray-800 bg-gradient-to-r from-sky-500 to-blue-950 p-[1px]">
                  <div className="back flex w-full items-center justify-center rounded-xl bg-gray-900 p-5">
                    <span className=" bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-xl font-extrabold text-transparent">
                      AULA 02
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold">
                O Roteiro Ideal para Vender Mais de 80 Contratos por Mês
              </h3>
            </div>
          </div>

          {/* Lesson 3 */}
          <div className="w-full rounded-xl border border-gray-800 bg-transparent p-[1px] transition-[1s] duration-[20000] ease-in hover:border-gray-900 hover:bg-gradient-to-l hover:from-sky-500 hover:to-blue-950">
            <div className="flex w-full flex-col gap-5 rounded-xl bg-gray-900 p-8 text-white shadow-xl backdrop-blur-lg">
              <div className="flex w-full flex-col-reverse items-center justify-between gap-5 lg:flex-row">
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

                <div className="w-max rounded-xl border border-gray-800 bg-gradient-to-r from-sky-500 to-blue-950 p-[1px]">
                  <div className="back flex w-full items-center justify-center rounded-xl bg-gray-900 p-5">
                    <span className=" bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-xl font-extrabold text-transparent">
                      AULA 03
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold">
                Como Quebrar as Principais Objeções e Ter Confiança no
                Fechamento
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
