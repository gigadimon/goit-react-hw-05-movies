import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const BASE_REMOTE_URL = '/goit-react-hw-05-movies';

export function FilmList({ filmList }) {
  const location = useLocation();
  return (
    <ul>
      {filmList &&
        filmList.map(({ id, title, name }) => (
          <li key={id}>
            <Link
              to={`${BASE_REMOTE_URL}/movies/${id}`}
              state={
                location.search
                  ? location.pathname + location.search
                  : location.pathname
              }
            >
              {title ?? name}
            </Link>
          </li>
        ))}
    </ul>
  );
}

FilmList.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
