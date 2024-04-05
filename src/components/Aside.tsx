import { Search } from './Search'
import { TagToggleable } from './TagToggleable'

import { AvailableTagColors, TagColors } from '../utils/getTagColor'
import { Divider } from './Divider'
import { ArrowDown, ArrowLeft, X } from 'lucide-react'
import { AsideContainer } from './Aside.Container'
import { FormEvent, useState } from 'react'
import { FilterSection } from './FilterSection'
import { Slider } from './Slider'
import { useFilter } from '../hooks/useFilter'
import { getSearchQuery } from '../utils/getSearchQuery'
import { twMerge } from 'tailwind-merge'

type AsideProps = {
  onClose: () => void
  visible: boolean
}

export function Aside({ onClose, visible }: AsideProps) {
  const { resetAllFilters, queryFilter, searchByFilter } = useFilter()
  const [value, setValue] = useState('')
  const [priceRange, setPriceRange] = useState<number[]>([0, 100])
  const [colors, setColors] = useState<TagColors[]>([])

  function handleChangeColors(color: TagColors) {
    const newColors = colors.find((valueColor) => valueColor === color)
      ? colors.filter((valueColor2) => valueColor2 !== color)
      : [...colors, color]

    setColors(newColors)
  }

  function handleChangePriceRange(priceRangeValue: number[]) {
    setPriceRange(priceRangeValue)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    searchByFilter({ colors, priceRange, value })
    onClose?.()
  }

  function handleResetAllFilters() {
    resetAllFilters()
    setValue('')
    setPriceRange([0, 100])
    setColors([])
    onClose?.()
  }

  const searchUrlIsDiff =
    queryFilter !== getSearchQuery({ colors, priceRange, value })

  return (
    <form
      onSubmit={handleSubmit}
      className={twMerge(
        'relative mini:fixed bg-branding-white flex flex-col h-screen w-[18.75rem] border-r border-r-branding-grey-400 py-5 mini:w-full mini:self-end',
        !visible && 'mini:invisible mini:hidden',
      )}
    >
      <div className="overflow-x-auto flex-1 pb-2">
        <AsideContainer className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              type="button"
              className="invisible hidden bg-transparent text-branding-orange rounded-full hover:bg-branding-grey-400 transition-all duration-200 ease-in-out mini:visible mini:flex"
            >
              <ArrowLeft />
            </button>

            <h2 className="text-branding-black text-xl font-bold">
              Filter by:
            </h2>

            <button
              type="button"
              onClick={handleResetAllFilters}
              className="flex items-center justify-center px-2 py-1 bg-transparent text-branding-grey-800 text-sm uppercase border border-branding-grey-800 rounded-md hover:text-branding-burgundy hover:border-branding-burgundy transition-all duration-200 ease-out"
            >
              Reset All
              <X size={14} className="ml-1" />
            </button>
          </div>

          <Search
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Value"
          />
        </AsideContainer>

        <Divider />

        <FilterSection title="color">
          <div className="flex-shrink space-y-2">
            {AvailableTagColors.map((type) => (
              <TagToggleable
                onClick={() => handleChangeColors(type)}
                selected={colors.includes(type)}
                type={type}
                key={type}
              />
            ))}
          </div>
        </FilterSection>

        <Divider />

        <FilterSection title="price">
          <Slider
            priceRange={priceRange}
            onChangePriceRange={handleChangePriceRange}
          />
        </FilterSection>
      </div>

      <div className="flex flex-col w-full z-5 bottom-0 px-5 bg-branding-white min-h-16 py-4 items-center justify-center">
        {searchUrlIsDiff && (
          <span className="flex flex-col items-center text-branding-grey-800 font-semibold text-xs text-center mb-3">
            {"Your filters have changed. Don't forget to research"}
            <ArrowDown size={16} />
          </span>
        )}
        <button
          disabled={!searchUrlIsDiff}
          type="submit"
          className="w-full bg-transparent border-2 border-branding-orange px-3 py-1 rounded-full text-branding-orange font-semibold uppercase hover:bg-branding-orange hover:text-branding-white transition-all duration-200 ease-in-out disabled:bg-branding-grey-400 disabled:border-branding-grey-800 disabled:text-branding-grey-800 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </div>
    </form>
  )
}
