import { Footer } from '@/app/components/Footer'
import { Header } from '@/app/components/Header'
import { ReactNode } from 'react'

export default function LessonLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
