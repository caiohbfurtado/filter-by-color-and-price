import { TagColors } from '../utils/getTagColor'
import { TagReadable } from './TagReadable'
import { Loader } from 'lucide-react'
import { useFilter } from '../hooks/useFilter'

export type ProductProps = {
  type: TagColors
  value: number
}

export function Main() {
  const { products, isLoading } = useFilter()

  if (isLoading) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <Loader size={36} className="animate-spin text-branding-orange" />
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 p-5">
      <span className="text-branding-black text-md font-medium uppercase">
        Items ({products.length})
      </span>

      <div className="flex-wrap flex box-border mt-4">
        {products.map(({ type, value }, i) => (
          <TagReadable
            type={type}
            key={`${type}-${value}-${i}`}
            value={value}
          />
        ))}
      </div>
    </div>
  )
}
