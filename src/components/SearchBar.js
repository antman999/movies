import React from 'react'
import { Input } from 'semantic-ui-react';

const SearchBar = ({onChange, value}) => {
  return (
	 <div>
	  <Input
		 onChange={onChange}
		 value={value}
		 icon='search'
		 placeholder='Type a movie..'
		/>
	 </div>
 );
}

export default SearchBar
