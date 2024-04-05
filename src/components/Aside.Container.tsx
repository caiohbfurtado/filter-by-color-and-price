import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type AsideContainerProps = {
  children: ReactNode
  className?: string
}

export function AsideContainer({ children, className }: AsideContainerProps) {
  return <div className={twMerge('px-5', className)}>{children}</div>
}
