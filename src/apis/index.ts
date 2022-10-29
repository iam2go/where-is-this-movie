import axios from "axios";

const TMDB_API = process.env.REACT_APP_TMDB_API;
const api_key = process.env.REACT_APP_TMDB_KEY;

export type MovieData = {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  popularity: number;
};

type Response<T> = {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
};

type Genres = {
  id: number;
  name: string;
};

export type MovieInfo = {
  backdrop_path: string;
  genres: Genres[];
  id: number;
  tagline: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: 124;
  title: string;
};

export type Provider = {
  display_priority: number;
  logo_path: string;
  provider_name: string;
  provider_id: number;
};

const searchMovieList = async (params: object) => {
  const response = await axios.get<Response<MovieData[]>>(
    `${TMDB_API}/search/movie`,
    {
      params: { api_key, language: "ko-KR", ...params },
    }
  );
  return response.data;
};

const getMovieDetail = async (movieID: string) => {
  const response = await axios.get<MovieInfo>(`${TMDB_API}/movie/${movieID}`, {
    params: { api_key, language: "ko-KR" },
  });
  return response.data;
};

const getMovieProviders = async (movieID: string) => {
  const response = await axios.get(
    `${TMDB_API}/movie/${movieID}/watch/providers`,
    {
      params: { api_key },
    }
  );
  return response.data;
};

const getRecommendMovies = async (movieID: string) => {
  const response = await axios.get<Response<MovieInfo[]>>(
    `${TMDB_API}/movie/${movieID}/recommendations`,
    {
      params: { api_key, language: "ko-KR" },
    }
  );
  return response.data;
};

const getProviderList = async () => {
  const response = await axios.get<Response<Provider>>(
    `${TMDB_API}/watch/providers/movie`,
    {
      params: { api_key, language: "ko-KR", watch_region: "KR" },
    }
  );
  return response.data;
};

export {
  searchMovieList,
  getMovieDetail,
  getMovieProviders,
  getRecommendMovies,
  getProviderList,
};
