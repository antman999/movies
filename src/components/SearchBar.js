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

//Here im using a functional component because im holding state on the app level to pass down to our movies search. 

//I de-structured props to avoid using 'props.' just need the values I passed down. If further properties are needed add them above. 

//I imported the Input component from semantic for Styling. 