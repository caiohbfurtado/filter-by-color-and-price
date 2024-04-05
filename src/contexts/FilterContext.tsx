/* eslint-disable no-useless-catch */
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from 'react'
import { TagColors } from '../utils/getTagColor'
import { getSearchQuery } from '../utils/getSearchQuery'
import { ProductProps } from '../components/Main'
import { api } from '../utils/api'

export type FilterProps = {
  colors: TagColors[]
  priceRange: number[]
  value?: string
}

export type FilterContextDataProps = {
  isLoading: boolean
  queryFilter: string
  products: ProductProps[]
  searchByFilter: (filter: FilterProps) => void
  resetAllFilters: () => void
}

type FilterContextProviderProps = {
  children: ReactNode
}

export const FilterContext = createContext<FilterContextDataProps>(
  {} as FilterContextDataProps,
)

const initialFilter = {
  colors: [],
  value: undefined,
  priceRange: [0, 100],
}

export function FilterContextProvider({
  children,
}: FilterContextProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [queryFilter, setQueryFilter] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getProducts = useCallback(async () => {
    const { data } = await api.get<ProductProps[]>(`/products${queryFilter}`)
    setProducts(data)
  }, [queryFilter])

  useEffect(() => {
    try {
      setIsLoading(true)
      getProducts()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [getProducts, queryFilter])

  function searchByFilter(filter: FilterProps) {
    const finalURL = getSearchQuery(filter)
    setQueryFilter(finalURL)
  }

  function resetAllFilters() {
    searchByFilter(initialFilter)
  }

  return (
    <FilterContext.Provider
      value={{
        isLoading,
        products,
        queryFilter,
        resetAllFilters,
        searchByFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
