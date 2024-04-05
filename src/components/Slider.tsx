import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'
import { Divider } from './Divider'
import { ChangeEvent } from 'react'

type SliderProps = {
  priceRange: number[]
  onChangePriceRange: (value: number[]) => void
}

export function Slider({ priceRange, onChangePriceRange }: SliderProps) {
  const max = 100
  const min = 0

  function handleChangeMinOrMax(
    event: ChangeEvent<HTMLInputElement>,
    isMin: boolean,
  ) {
    const isNotANumber = isNaN(Number(event.target.value))
    if (isNotANumber) {
      return
    }

    const value = Number(event.target.value)
    if (value < min || value > max) {
      return
    }

    if (isMin) {
      if (value > priceRange[1]) {
        onChangePriceRange([priceRange[1], value])
      } else {
        onChangePriceRange([value, priceRange[1]])
      }
      return
    }

    if (!isMin) {
      if (value > priceRange[1]) {
        onChangePriceRange([priceRange[1], value])
      } else {
        onChangePriceRange([priceRange[0], value])
      }
    }
  }

  return (
    <div className="relative">
      <div className="relative h-14 w-full -mb-2 justify-center text-sm font-semibold text-branding-grey-800">
        <div className="absolute bottom-0 w-full h-full grid grid-cols-100 gap-px">
          {Array.from(Array(10).keys()).map((col, index1) => (
            <div
              key={col}
              className={`grid grid-cols-100 w-full h-full gap-px`}
            >
              {Array.from(Array(10).keys()).map((col, index2) => (
                <div
                  key={col}
                  className={`w-full ${priceRange[0] < index1 * 10 + (index2 + 1) && priceRange[1] >= index1 * 10 + (index2 + 1) ? 'bg-branding-orange' : 'bg-branding-grey-400'} h-full`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <SliderPrimitive.Root
        value={[priceRange[0], priceRange[1]]}
        min={min}
        max={max}
        onValueChange={(value) => onChangePriceRange(value)}
        aria-label="value"
        className="relative flex h-5 w-full touch-none items-center"
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-branding-grey-500 dark:bg-branding-white">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-branding-orange dark:bg-branding-orange" />
        </SliderPrimitive.Track>
        {[0, 1].map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className={clsx(
              'block h-5 w-5 rounded-full bg-purple-600 dark:bg-branding-white border-2 border-branding-orange',
              'focus:outline-none focus-visible:ring focus-visible:ring-branding-orange focus-visible:ring-opacity-100',
            )}
          />
        ))}
      </SliderPrimitive.Root>

      <div className="flex justify-between mt-4">
        <div className="flex flex-col items-center mr-3">
          <input
            type="text"
            inputMode="numeric"
            className="max-w-16 h-10 border-none bg-branding-grey-500 rounded-md text-center px-1 outline-branding-orange"
            placeholder="Min"
            value={priceRange[0]}
            onChange={(e) => handleChangeMinOrMax(e, true)}
          />
          <span className="text-xs uppercase text-branding-grey-800 font-bold mt-2">
            Min
          </span>
        </div>

        <Divider />

        <div className="flex flex-col items-center ml-3">
          <input
            type="text"
            inputMode="numeric"
            className="max-w-16 h-10 border-none bg-branding-grey-500 rounded-md text-center px-1 outline-branding-orange"
            placeholder="Max"
            value={priceRange[1]}
            onChange={(e) => handleChangeMinOrMax(e, false)}
          />
          <span className="text-xs uppercase text-branding-grey-800 font-bold mt-2">
            Max
          </span>
        </div>
      </div>
    </div>
  )
}
