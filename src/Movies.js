import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'



const Movies = ({movie}) => (
      <div>
         <Link to="/test" >
         <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
         </Link>
         <div> Hi movies </div>
         <h2>{movie.id}</h2> 
      </div>
  )




Movies.propTypes = {
      movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
   }).isRequired,
}

export default Movies;
