import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Loader = lazy(() => import('./Loader/Loader'));

const BASE_REMOTE_URL = '/goit-react-hw-05-movies/';

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`${BASE_REMOTE_URL}`} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={`movies`} element={<Movies />} />
            <Route path={`movies/:movieId`} element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
