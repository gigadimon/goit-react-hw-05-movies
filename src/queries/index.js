import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '776d9fc25cdee411748cae84044282cc';

export async function getTrending() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function getMovieDetail(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
}

export async function getMovieCast(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
}

export async function getSearchQuery(query) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query=${query}`
  );

  return response.data.results;
}

export async function getMovieReviews(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&page=1`
  );

  return response.data.results;
}
