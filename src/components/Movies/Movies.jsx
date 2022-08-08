import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FilmList } from 'components/FilmList/FilmList';
import { getSearchQuery } from 'queries';
import s from './Movies.module.css';

/* Уведомления */
const emptyResponseNotify = () =>
  toast('Sorry, no movies were found matching your search');
const emptyRequestNotify = () => toast.error('Request cannot be empty');

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [response, setResponse] = useState([]);
  const query = searchParams.get('query');

  function formQuery(e) {
    const key = e.target.children.query.name;
    const value = e.target.children.query.value;

    return { [key]: value };
  }

  function handleSubmit(e) {
    e.preventDefault();

    const params = formQuery(e);
    if (!params.query) {
      return emptyRequestNotify();
    }
    setSearchParams(params);

    e.target.children.query.value = '';
  }

  useEffect(() => {
    query
      ? getSearchQuery(query).then(response => {
          if (response.length === 0) {
            setResponse([]);
            return emptyResponseNotify();
          }
          setResponse(response);
        })
      : setResponse([]);
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <input type="text" name="query" className={s.input} />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>

      {query && <FilmList filmList={response} />}

      <ToastContainer />
    </div>
  );
}
