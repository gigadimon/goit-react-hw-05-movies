import { useEffect, useState } from 'react';

import { FilmList } from 'components/FilmList/FilmList';

import { getTrending } from 'queries';

export default function Home() {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrending().then(setTrendings);
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <FilmList filmList={trendings} />;
    </div>
  );
}
