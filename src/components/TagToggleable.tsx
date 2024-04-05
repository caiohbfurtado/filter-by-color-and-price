import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { TagColors, getTagColor } from '../utils/getTagColor'

type TagToggleableProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> & {
  type: TagColors
  selected?: boolean
}

export function TagToggleable({
  type,
  selected = false,
  ...rest
}: TagToggleableProps) {
  const { bg, color, text } = getTagColor(type)

  return (
    <button
      type="button"
      className={twMerge(
        'self-start px-3 py-2 rounded-md border-4 border-transparent hover:brightness-90 transition-all duration-200 ease-in-out mr-2',
        `${bg} ${color}`,
        selected && 'border-branding-orange',
      )}
      {...rest}
    >
      {text}
    </button>
  )
}
