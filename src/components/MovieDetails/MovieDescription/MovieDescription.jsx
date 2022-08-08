import PropTypes from 'prop-types';
import s from './MovieDescription.module.css';

export function MovieDescription({ movieDetail }) {
  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetail;
  return (
    <div className={s.movieDescription}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="film poster"
        height="300px"
      />
      <div className={s.textContent}>
        <h2>
          {title ?? name} ({new Date(release_date).getFullYear()})
        </h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        {overview ? (
          <p>{overview}</p>
        ) : (
          <p>We don't have overview for this movie</p>
        )}

        <h3>Genres</h3>
        <p>{genres.map(genre => ` ${genre.name}`)}</p>
      </div>
    </div>
  );
}

MovieDescription.propTypes = {
  movieDetail: PropTypes.object.isRequired,
};
