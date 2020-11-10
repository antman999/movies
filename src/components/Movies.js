import React, { Component } from 'react'

export class Movies extends Component {

  state = {
     movies:[]
   }
  
  componentDidMount() {
    fetch(
			`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${'bojack'}`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-key': `${process.env.MOVIES_API_KEY}`,
					'x-rapidapi-host':
						'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
				},
			}
		)
			.then(resp => resp.json())
			.then(resp => this.setState({ movies: resp }));
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Movies
