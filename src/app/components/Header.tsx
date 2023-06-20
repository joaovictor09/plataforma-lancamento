import { Bell, User } from 'lucide-react'
import Image from 'next/image'
import Logo from '../../assets/usmleflix.svg'

export function Header() {
  return (
    <header className="z-50 flex w-full justify-center bg-gradient-to-t from-transparent via-gray-900/30 via-30% to-gray-900/60 bg-cover py-5 text-gray-100">
      <div className="flex w-full items-center justify-between px-16">
        <div className="flex w-full items-center gap-16">
          <Image
            src={Logo}
            height={48}
            alt="Logo da mentoria do Guilherme Nagel"
          />

          <ul className="flex gap-7">
            <li>
              <a href="" className="font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <Bell />
          <div className="rounded-lg bg-gray-600 p-2">
            <User />
          </div>
        </div>
      </div>
    </header>
  )
}
