import { Home } from './Home';
import { Movies } from './Movies';

import { NavLink, Routes, Route } from 'react-router-dom';
import { MovieDetails } from './MovieDetails';
// const BASE_REMOTE_URL = '/goit-react-hw-05-movies';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`movies`}>Movies</NavLink>
      </nav>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`movies`} element={<Movies />} />
        <Route path={`movies/:movieId`} element={<MovieDetails />} />
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
