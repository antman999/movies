import React from 'react'
import { Card} from 'semantic-ui-react';
const MovieResults = (props) => {
  console.log(props)
  return (
		<div>
			<Card
				image={props.Poster}
				header={props.name}
				description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
				extra={'h'}
			/>
		</div>
	);
}

export default MovieResults
