import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'

class App extends Component {
	state = {
		search: '',
	};

	handleSearch = e => {
		this.setState({ search: e.target.value });
  };
  
  render() {
    console.log(this.state.search)
		return (
			<div className='App-header'>
				<SearchBar onChange={this.handleSearch} value={this.state.search} />
			</div>
		);
	}
}

export default App
