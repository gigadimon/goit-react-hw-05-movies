import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetail } from 'queries';

import { MovieDescription } from './MovieDescription';
import s from './MovieDetails.module.css';

export default function MovieDetails() {
  const [backPath, setPath] = useState('');
  const [movieDetail, setMovieDetail] = useState('');
  const location = useLocation();
  const { movieId } = useParams();
  const navigate = useNavigate();

  const navState = location.state;

  useEffect(() => {
    if (!navState) {
      return;
    }
    setPath(navState);
  }, [navState]);

  useEffect(() => {
    getMovieDetail(movieId).then(setMovieDetail);
  }, [movieId]);

  return (
    <div className={s.detailContainer}>
      <button
        className={s.button}
        disabled={!backPath}
        type="button"
        onClick={() => {
          navigate(backPath);
        }}
      >
        &#8592; Go back
      </button>
      {movieDetail && <MovieDescription movieDetail={movieDetail} />}
      <div className={s.additionalInfo}>
        <h4>Additional Info</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
