import axios from "axios";

const TMDB_API = process.env.REACT_APP_TMDB_API;
const api_key = process.env.REACT_APP_TMDB_KEY;

type MovieData = {
  [key: string]: string | number;
};

type Response = {
  page: number;
  results: MovieData[];
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

const searchMovieList = async (params: object) => {
  const response = await axios.get<Response>(`${TMDB_API}/search/movie`, {
    params: { api_key, language: "ko-KR", ...params },
  });
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

export { searchMovieList, getMovieDetail, getMovieProviders };
