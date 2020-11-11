import React from 'react'
import { Input, Icon,Button } from 'semantic-ui-react';

const SearchBar = ({onChange, value, handleSubmit}) => {
 return (
<div>
  <form onSubmit={handleSubmit}>
    <Input onChange={onChange} value={value} placeholder='Type a movie..' />
    <Button icon type='submit'>
    <Icon name='search' />
    </Button>
  </form>
</div>
 );
}

export default SearchBar

//Here im using a functional component because im holding state on the app level. No need to use a class component if we don't need state here 

//I de-structured props to avoid using 'props.' just need the values I passed down. If further properties are needed add them above. 

//Im using Semantic's UI' Input component for styling here. . 