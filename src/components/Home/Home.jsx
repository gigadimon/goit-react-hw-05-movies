import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './Home.module.css';
import { nanoid } from 'nanoid';

import { getTrending } from 'query';

export default function Home() {
  const [trendings, setTrendings] = useState('');
  useEffect(() => {
    console.log('я выполнился');
    getTrending().then(setTrendings);
  }, []);

  return (
    <ul className={s.list}>
      {trendings &&
        trendings.map(el => {
          return (
            <Link to={`movies/${el.id}`} key={nanoid()}>
              {el.title ?? el.name}
            </Link>
          );
        })}
    </ul>
  );
}
