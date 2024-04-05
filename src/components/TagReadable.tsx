import { twMerge } from 'tailwind-merge'

import { TagColors, getTagColor } from '../utils/getTagColor'

type TagReadableProps = {
  type: TagColors
  value: number
}

export function TagReadable({ type, value, ...rest }: TagReadableProps) {
  const { bg, color } = getTagColor(type)

  return (
    <div
      className={twMerge(
        'self-start px-3 py-2 rounded-md mr-2 mb-2',
        `${bg} ${color}`,
      )}
      {...rest}
    >
      {value}
    </div>
  )
}
