import Image from 'next/image'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className="flex w-full items-center justify-center border-b border-zinc-200 bg-zinc-50 py-5 text-black">
      <Image src={Logo} height={48} alt="Logo da mentoria do Guilherme Nagel" />
    </header>
  )
}
