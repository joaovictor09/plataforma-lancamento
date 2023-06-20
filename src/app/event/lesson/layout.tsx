import { Footer } from '@/app/components/Footer'
import { Header } from '@/app/components/Header'
import { ReactNode } from 'react'

export default function LessonLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Header />
      {children}
      <Footer variant="dark" />
    </div>
  )
}
