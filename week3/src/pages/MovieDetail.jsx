import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/Movie';

function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className='page-container'>
      <div className='movie-detail-container'>
        <img src={IMG_BASE_URL + state.poster_path} alt="영화포스터" />
        <div className="movie-detail-info">
          <h3>{title}</h3>
          <span>⭐️ {state.vote_average}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;