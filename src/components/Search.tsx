import { InputHTMLAttributes } from 'react'

import { Search as SearchIcon } from 'lucide-react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Search({ ...rest }: InputProps) {
  return (
    <div className="relative flex items-center h-10 w-full bg-branding-grey-500 rounded-md">
      <SearchIcon
        size={16}
        className="absolute text-branding-grey-800 ml-2 pointer-events-none"
      />

      <input
        type="text"
        className="bg-transparent flex flex-1 w-full h-full placeholder:text-branding-grey-800 px-2 py-3 pl-8 outline-branding-grey-800 text-branding-black"
        {...rest}
      />
    </div>
  )
}
