import axios from "axios";

const TMDB_API = process.env.REACT_APP_TMDB_API;
const api_key = process.env.REACT_APP_TMDB_KEY;

const searchMovieList = async (params: object) => {
  const response = await axios.get(`${TMDB_API}/search/movie`, {
    params: { api_key, language: "ko-KR", ...params },
  });
  return response.data;
};

export { searchMovieList };
