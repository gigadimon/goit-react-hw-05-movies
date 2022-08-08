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
  const location = useLocation();
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    setSteps(prevState => prevState + 1);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      setSteps(0);
    };
  }, []);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState('');

  useEffect(() => {
    getMovieDetail(movieId).then(setMovieDetail);
  }, [movieId]);

  return (
    <div className={s.detailContainer}>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          navigate(-Number(`${steps}`));
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
