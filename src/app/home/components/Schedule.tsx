import { Calendar, Clock8 } from 'lucide-react'

export function Schedule() {
  return (
    <div className="mb-5 mt-10 w-full max-w-5xl px-5 sm:px-6 sm:py-12 lg:px-8">
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
            Precisa fazer inúmeras ligações para fechar uma venda? Trabalha que
            nem &quot;um cavalo véio 🐎&quot; e não tem resultado? Se isso
            acontece com você, pode ter certeza, está errando na forma de
            prospectar. Não tem nada de errado em fazer prospeção fria! Só que
            tem técnica, tem atalhos e formas de fazer que aumentam muito a sua
            taxa de conversão e vou ensinar tudo isso nessa aula.
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
  )
}
