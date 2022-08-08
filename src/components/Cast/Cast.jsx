import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'queries';

import blankAvatar from 'img/blank-avatar.jpg';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(el => (
          <li key={el.credit_id}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  : blankAvatar
              }
              alt="actor avatar"
              height="200px"
              width="135px"
            />
            <h3>{el.name}</h3>
            <p>Character: {el.character}</p>
          </li>
        ))}
    </ul>
  );
}
