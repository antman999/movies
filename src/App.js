import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import MovieSearch from './components/MovieSearch';
import PlaceholderCards from './components/PlaceholderCards';
class App extends Component {
 
state = {
  search: '',
  movies: [],
 };
  
 handleSearch = e => {this.setState({ search: e.target.value })};
  
 handleSubmit = e => {
  let { search } = this.state
  
  e.preventDefault()	 
  fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${search}&page=1`,
   {method: 'GET',
    headers: {
     'x-rapidapi-key':process.env.REACT_APP_MOVIES_API_KEY,
     'x-rapidapi-host':'movie-database-imdb-alternative.p.rapidapi.com',
     },
    }
  )
  .then(resp => resp.json())
  .then(resp => this.setState({ movies: resp.Search}));
 };

 render() {
   return (
   <div className='App'>
    <div className='searchbar'>
      <SearchBar onChange={this.handleSearch} value={this.state.search} handleSubmit={this.handleSubmit}/>
    </div>
    <div>
      {this.state.movies.length? (
       <MovieSearch userSearch={this.state.movies} />
	 ) : (
       <PlaceholderCards />
	 )}
       </div>
      </div>
      );
   }
}

export default App;
