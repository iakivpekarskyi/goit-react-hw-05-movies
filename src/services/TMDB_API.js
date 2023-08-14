// https://api.themoviedb.org/3/movie/157336?api_key=0557460def24df89d1fc61fbda66b934œ

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
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
  try {
    const response = await axios.get(`/search/movie?query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(id) {
  try {
    const response = await axios.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCast(id) {
  try {
    const response = await axios.get(`/movie/${id}/credits`);
    const cast = response.data.cast;
    return cast;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviews(id) {
  try {
    const response = await axios.get(`/movie/${id}/reviews`);
    const reviews = response.data.results;
    return reviews;
  } catch (error) {
    console.error(error);
  }
}
