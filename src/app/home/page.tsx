import { Footer } from '../components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Schedule } from './components/Schedule'
import { WhoIs } from './components/WhoIs'
import { Why } from './components/Why'

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-center bg-gray-900">
      <Hero />
      <Marquee />
      <Schedule />
      <Why />
      <WhoIs />
      <Footer variant="dark" />
    </main>
  )
}
