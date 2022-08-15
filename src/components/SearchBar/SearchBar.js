import React from "react";
import { ReactComponent as Search } from '../../icons/search.svg'

import "./searchBar.scss"

const SearchBar = () => {
  return (
    <div className="searchBar">
      <Search />
      <input placeholder="Search Here ..." />
    </div>
  );
};

export default SearchBar;
