import Home from './Home/Home';
import Movies from './Movies/Movies';

import { NavLink, Routes, Route } from 'react-router-dom';
const BASE_REMOTE_URL = '/goit-react-hw-05-movies';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to={`${BASE_REMOTE_URL}/`}>Home</NavLink>
        <NavLink to={`${BASE_REMOTE_URL}/movies`}>Movies</NavLink>
      </nav>
      <Routes>
        <Route path={`${BASE_REMOTE_URL}/`} element={<Home />} />
        <Route path={`${BASE_REMOTE_URL}/movies`} element={<Movies />} />
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
