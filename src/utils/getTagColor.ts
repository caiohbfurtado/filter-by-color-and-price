export const AvailableTagColors: ReadonlyArray<
  | 'black'
  | 'off-white'
  | 'navy-blue'
  | 'olive-green'
  | 'burgundy'
  | 'grey'
  | 'beige'
  | 'maroon'
  | 'teal'
  | 'mustard'
> = [
  'black',
  'off-white',
  'navy-blue',
  'olive-green',
  'burgundy',
  'grey',
  'beige',
  'maroon',
  'teal',
  'mustard',
] as const

export type TagColors = (typeof AvailableTagColors)[number]

const TagInfo = {
  black: {
    bg: 'bg-branding-black',
    color: 'text-branding-white',
    text: 'Black',
  },
  'off-white': {
    bg: 'bg-branding-off-white',
    color: 'text-branding-black',
    text: 'Off White',
  },
  'navy-blue': {
    bg: 'bg-branding-navy-blue',
    color: 'text-branding-white',
    text: 'Navy Blue',
  },
  'olive-green': {
    bg: 'bg-branding-olive-green',
    color: 'text-branding-white',
    text: 'Olive Green',
  },
  burgundy: {
    bg: 'bg-branding-burgundy',
    color: 'text-branding-white',
    text: 'Burgundy',
  },
  grey: {
    bg: 'bg-branding-grey-800',
    color: 'text-branding-white',
    text: 'Grey',
  },
  beige: {
    bg: 'bg-branding-beige',
    color: 'text-branding-beige-text',
    text: 'Beige',
  },
  maroon: {
    bg: 'bg-branding-maroon',
    color: 'text-branding-white',
    text: 'Maroon',
  },
  teal: { bg: 'bg-branding-teal', color: 'text-branding-white', text: 'Teal' },
  mustard: {
    bg: 'bg-branding-mustard',
    color: 'text-branding-black',
    text: 'Mustard',
  },
}

export function getTagColor(value: TagColors) {
  return TagInfo[value]
}
