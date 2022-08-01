import Home from './Home/Home';
import Movies from './Movies/Movies';

import { NavLink, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
