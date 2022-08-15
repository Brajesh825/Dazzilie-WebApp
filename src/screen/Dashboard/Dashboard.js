import React from 'react'

import SearchBar from '../../components/SearchBar/SearchBar'
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar"

import "./dashboard.scss"

const dashboard = () => {
  return (
    <div className='dashboard' >
           <SearchBar/>
           <CategoriesBar/>
    </div>
  )
}

export default dashboard