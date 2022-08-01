import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '776d9fc25cdee411748cae84044282cc';

export async function getTrending() {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  return response.data.results;
}
