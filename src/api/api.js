import axios from 'axios';

const ENDPOINTS = {
  GET_MOVIES: '/trending/all/day',
  GET_MOVIE_DETAILS: '/search/movie?query=',
  GET_MOVIE_CAST: '/movie/',
  GET_MOVIE_REVIEWS: '/movie/',
  // Dodaj tutaj inne endpointy
};
const API_URL = 'https://api.themoviedb.org/3';
const token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmI0MjEwNWRhZDRkNTEyMTk0OTY4NTJjMDIxMGVmNiIsInN1YiI6IjY0NjdlYzBjYTUwNDZlMDEwNThiMTFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J4oILHsNaxOa2wR7QI4IP-gTp_TQuJdUfMCgRJwoQAU';

// Funkcja do pobierania filmów
export const fetchMovies = async () => {
  const response = await axios({
    method: 'GET',
    url: API_URL + ENDPOINTS.GET_MOVIES,
    headers: {
      accept: 'application/json',
      Authorization: token,
    },
  });

  const data = await response;

  return data.data.results;
};

// Funkcja do pobierania szczegółów filmu
export const fetchMovieDetails = async id => {
  const response = await axios({
    method: 'GET',
    url: API_URL + ENDPOINTS.GET_MOVIE_DETAILS + id,
    headers: {
      accept: 'application/json',
      Authorization: token,
    },
  });

  const data = await response;

  return data.data.results;
};

// Funkcja do pobierania aktorów filmu
export const fetchMovieCast = async id => {
  const response = await axios({
    method: 'GET',
    url: API_URL + ENDPOINTS.GET_MOVIE_CAST + id + '/credits',
    headers: {
      accept: 'application/json',
      Authorization: token,
    },
  });

  const data = await response;
  console.log(data);
  return data.data.cast;
};

// Funkcja do pobierania opinii filmu
export const fetchMovieReviews = async id => {
  const response = await axios({
    method: 'GET',
    url: API_URL + ENDPOINTS.GET_MOVIE_REVIEWS + id + '/reviews',
    headers: {
      accept: 'application/json',
      Authorization: token,
    },
  });

  const data = await response;

  return data.data.results;
};
