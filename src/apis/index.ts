import { Filter } from "@recoil/discover";
import axios from "axios";

const TMDB_API = process.env.REACT_APP_TMDB_API || "";
const api_key = process.env.REACT_APP_TMDB_KEY || "";

export type MovieData = {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  popularity: number;
  backdrop_path: string;
};

type Response<T> = {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
};
type ResponseGenres = {
  genres: Genres[];
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

export type DiscoverOptions = {
  with_original_language?: string[];
  sort_by?: string;
  page: number;
  with_genres?: number[];
  with_keywords?: number[];
  with_watch_providers?: number[];
  watch_region?: string;
};

const searchMovieList = async (params: object) => {
  const response = await axios.get<Response<MovieData[]>>(
    `${TMDB_API}/search/movie`,
    {
      params: { api_key, language: "ko-KR", ...params, watch_region: "KR" },
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

const getGenreList = async () => {
  const response = await axios.get<ResponseGenres>(
    `${TMDB_API}/genre/movie/list`,
    {
      params: { api_key, language: "ko-KR" },
    }
  );
  return response.data.genres;
};

const discoverMovieList = async (
  params: Filter & { sort_by: string; page: number }
) => {
  let newParams = {} as { [key in keyof DiscoverOptions]?: string };

  if (params.genre?.length > 0) {
    newParams.with_genres = params.genre
      .map((id: number) => id.toString())
      .join(",");
  }

  if (params.platforms?.length > 0) {
    newParams.with_watch_providers = params.platforms
      .map((id: number) => id.toString())
      .join(",");
    newParams.watch_region = "KR";
  }

  if (params.region?.length > 0) {
    newParams.with_original_language = params.region.join("|");
  }

  if (params.keyword?.length > 0) {
    newParams.with_keywords = params.keyword.join(",");
  }

  const response = await axios.get<Response<MovieData[]>>(
    `${TMDB_API}/discover/movie`,
    {
      params: {
        api_key,
        language: "ko-KR",
        sort_by: params.sort_by,
        page: params.page,
        ...newParams,
      },
    }
  );
  return response.data;
};

export {
  searchMovieList,
  getMovieDetail,
  getMovieProviders,
  getRecommendMovies,
  getGenreList,
  discoverMovieList,
};
