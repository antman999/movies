import React from 'react'
import { Grid } from 'semantic-ui-react';
import MovieResults from './MovieResults';
const MovieSearch = ({ userSearch }) => {
   console.log(userSearch)
    return (
      <div>
        <Grid columns={4} stackable>
          {userSearch.map(results => (
            <MovieResults {...results}/>
         ))}
        </Grid>
      </div>
    )
}

export default MovieSearch
