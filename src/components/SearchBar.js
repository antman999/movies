import React, { Component } from 'react'

class SearchBar extends Component {
 state = {
  search: '',
 };
  
 handleSearch = e => {
	this.setState({ search: e.target.value });
 };
  
 render() {
	return (
	 <div>
		<input onChange={this.handleSearch} value={this.state.search} />
	 </div>
	);
 }
}

export default SearchBar
