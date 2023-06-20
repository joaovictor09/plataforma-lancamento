import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Imersão Vendas na Prática',
  description:
    'Aprenda de forma simples e descomplicada o segredo das grandes agências para fechar mais de 80 contratos recorrentes de gestão de tráfego por mês.',
  openGraph: {
    title: 'Imersão Vendas na Prática',
    description:
      'Aprenda de forma simples e descomplicada o segredo das grandes agências para fechar mais de 80 contratos recorrentes de gestão de tráfego por mês.',
    url: 'https://lancamento-gui.joaovictor09.dev',
  },
  twitter: {
    title: 'Imersão Vendas na Prática',
    description:
      'Aprenda de forma simples e descomplicada o segredo das grandes agências para fechar mais de 80 contratos recorrentes de gestão de tráfego por mês.',
    url: 'https://lancamento-gui.joaovictor09.dev',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} flex w-full flex-col items-center scroll-smooth bg-gray-900 text-gray-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
