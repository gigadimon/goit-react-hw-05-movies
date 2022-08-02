import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './Home.module.css';

import { getTrending } from 'query';

const BASE_REMOTE_URL = '/goit-react-hw-05-movies';

export function Home() {
  const [trendings, setTrendings] = useState('');

  useEffect(() => {
    getTrending().then(setTrendings);
  }, []);

  return (
    <ul className={s.list}>
      {trendings &&
        trendings.map(({ id, title, name }) => (
          <Link to={`movies/${id}`} key={id}>
            {title ?? name}
          </Link>
        ))}
    </ul>
  );
}
