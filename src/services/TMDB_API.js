import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '0557460def24df89d1fc61fbda66b934',
};

export async function getTrending() {
  try {
    const response = await axios.get(`/trending/movie/day`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieByName(query) {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
}

export async function getMovieById(id) {
  const response = await axios.get(`/movie/${id}`);

  return response.data;
}

export async function getMovieCast(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  const cast = response.data.cast;
  return cast;
}

export async function getMovieReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  const reviews = response.data.results;
  return reviews;
}
