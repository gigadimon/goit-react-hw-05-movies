import { NavLink, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import s from './App.module.css';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Loader = lazy(() => import('./Loader/Loader'));

const BASE_REMOTE_URL = '/goit-react-hw-05-movies';

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <nav className={s.nav}>
          <NavLink to={`${BASE_REMOTE_URL}/`} className={s.link}>
            Home
          </NavLink>
          <NavLink to={`${BASE_REMOTE_URL}/movies`} className={s.link}>
            Movies
          </NavLink>
        </nav>

        <Routes>
          <Route path={`${BASE_REMOTE_URL}/`} element={<Home />} />
          <Route path={`${BASE_REMOTE_URL}/movies`} element={<Movies />} />
          <Route
            path={`${BASE_REMOTE_URL}/movies/:movieId`}
            element={<MovieDetails />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
