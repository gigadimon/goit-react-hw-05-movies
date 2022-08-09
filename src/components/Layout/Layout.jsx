import { NavLink, Outlet } from 'react-router-dom';

import s from './Layout.module.css';

const BASE_REMOTE_URL = '/goit-react-hw-05-movies';

export default function Layout() {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to={`${BASE_REMOTE_URL}/`} className={s.link}>
          Home
        </NavLink>
        <NavLink to={`${BASE_REMOTE_URL}/movies`} className={s.link}>
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
