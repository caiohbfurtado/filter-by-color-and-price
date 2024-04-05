import { FilterProps } from '../contexts/FilterContext'

export function getSearchQuery(filter: FilterProps) {
  const filterColorsURL = filter.colors
    .map((color) => `type=${color}`)
    .join('&')
  const filterRangeURL = `value_gte=${filter.priceRange[0]}&value_lte=${filter.priceRange[1]}`
  const filterValue = filter.value ? `value_like=${filter.value}` : ''

  const finalURL = `?${filterRangeURL}${filter.colors.length > 0 ? `&${filterColorsURL}` : ''}${filter.value ? `&${filterValue}` : ''}`
  return finalURL
}
