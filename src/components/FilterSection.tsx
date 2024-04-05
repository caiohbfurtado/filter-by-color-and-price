import { ChevronUp } from 'lucide-react'
import { AsideContainer } from './Aside.Container'
import { ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type FilterSectionProps = {
  children: ReactNode
  title: string
}

export function FilterSection({ children, title }: FilterSectionProps) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AsideContainer>
      <div className="flex items-center justify-between mb-5">
        <span className="uppercase text-branding-black text-md font-medium">
          {title}
        </span>

        <button
          type="button"
          className="p-1 rounded-full bg-transparent hover:bg-branding-grey-500"
          onClick={() => setIsVisible((oldValue) => !oldValue)}
        >
          <ChevronUp
            size={16}
            className={twMerge(
              'text-branding-orange',
              !isVisible && 'rotate-180',
            )}
          />
        </button>
      </div>

      <div
        className={`${!isVisible ? 'hidden invisible h-0' : 'animate-fade-down animate-duration-[400ms] visible'}`}
      >
        {children}
      </div>
    </AsideContainer>
  )
}
