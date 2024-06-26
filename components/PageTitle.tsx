import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 lg:text-3xl lg:leading-14">
      {children}
    </h1>
  )
}
