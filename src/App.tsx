import { useState } from 'react'
import { Aside } from './components/Aside'
import { Main } from './components/Main'
import { FilterContextProvider } from './contexts/FilterContext'
import { Filter } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

function App() {
  const [filtersIsVisible, setFiltersIsVisible] = useState(false)

  return (
    <FilterContextProvider>
      <div className="flex mini:flex-col">
        <button
          onClick={() => setFiltersIsVisible(true)}
          className={twMerge(
            'invisible mini:visible fixed bottom-0 left-0 bg-branding-orange py-5 px-5 w-full flex items-center justify-center text-lg font-bold gap-2',
            filtersIsVisible && 'mini:invisible',
          )}
        >
          Filter
          <Filter size={20} />
        </button>

        <Aside
          onClose={() => setFiltersIsVisible(false)}
          visible={filtersIsVisible}
        />

        <Main />
      </div>
    </FilterContextProvider>
  )
}

export default App
