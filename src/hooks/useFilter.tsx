import { useContext } from 'react'
import {
  FilterContext,
  FilterContextDataProps,
} from '../contexts/FilterContext'

export function useFilter(): FilterContextDataProps {
  const context = useContext(FilterContext)

  return context
}
