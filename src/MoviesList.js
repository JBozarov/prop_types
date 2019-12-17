import React, {Component} from 'react';
import Movies from './Movies.js';


class MoviesList extends Component {

  state={
    movies: [],
  }

  async componentDidMount () {
    try{
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3f1677a463449fb2a6443b049c05d134&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState ({
        movies: movies.results,
      });

    } catch (e) {
      console.log(e);
    }

  }

  render(){
    return (
      <div>
        {this.state.movies.map(movie => <Movies key={movie.id} movie={movie} />)}
      </div>
    )
  }
}


export default MoviesList;
