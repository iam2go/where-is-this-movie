import axios from "axios";

const TMDB_API = process.env.REACT_APP_TMDB_API;
const api_key = process.env.REACT_APP_TMDB_KEY;

type MovieData = {
  [key: string]: string;
};

type Response = {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
};

const searchMovieList = async (params: object) => {
  const response = await axios.get<Response>(`${TMDB_API}/search/movie`, {
    params: { api_key, language: "ko-KR", ...params },
  });
  return response.data;
};

export { searchMovieList };
