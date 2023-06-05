import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Imersão Vendas na Prática',
  description: 'Aprenda de forma simples e descomplicada o segredo das grandes agências para fechar mais de 80 contratos recorrentes de gestão de tráfego por mês.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} scroll-smooth`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
