import Image from 'next/image'
import Logo from '../../assets/Logo.svg'

interface FooterProps {
  variant?: 'light' | 'dark'
}

export function Footer({ variant }: FooterProps) {
  return (
    <div
      className={`flex w-full items-center border-t px-6 xl:px-0 ${
        variant === 'dark'
          ? 'border-zinc-600 bg-gray-900'
          : 'border-gray-100 bg-zinc-50'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center justify-between gap-6 self-center py-6 text-sm sm:flex-row md:text-base">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <Image
            src={Logo}
            height={32}
            alt="Logo da mentoria do Guilherme Nagel"
          />
          <span
            className={`md: text-center ${
              variant === 'dark' ? 'text-gray-200' : 'text-gray-600'
            }`}
          >
            Copyright © 2023 - Elevation Treinamentos LTDA. CNPJ:
            236083820001/36
          </span>
        </div>

        <span
          className={`${
            variant === 'dark' ? 'text-gray-200' : 'text-gray-600'
          }`}
        >
          Políticas de privacidade
        </span>
      </div>
    </div>
  )
}
