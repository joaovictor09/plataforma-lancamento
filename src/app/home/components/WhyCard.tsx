import { ReactNode } from 'react'

interface WhyCardProps {
  children: ReactNode
  props: {
    title: string
  }
}

export function WhyCard({ children, props }: WhyCardProps) {
  return (
    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-900/20 hover:shadow-blue-900/10">
      <div className="text-blue-900">{children}</div>

      <h2 className="mt-4 text-xl font-bold text-white">{props.title}</h2>
    </div>
  )
}
