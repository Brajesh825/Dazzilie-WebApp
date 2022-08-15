import './categoriesBar.scss'

import { useState } from 'react'

const keywords = [
   'All',
   'Food',
   'Drink',
   'Snacks',
   'Packages',
]

const CategoriesBar = () => {
   const [activeElement, setActiveElement] = useState('All')

   const handleClick = value => {
      setActiveElement(value)
   }
   return (
      <div className='categoriesBar'>
         {keywords.map((value, i) => (
            <span
               onClick={() => handleClick(value)}
               key={i}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
            
         ))}
      </div>
   )
}

export default CategoriesBar