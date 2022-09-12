import { useQuery } from "@tanstack/react-query";
import { searchMovieList } from "../../apis";

export function useSearchMovie(keyword: string) {
  return useQuery(
    ["movie-list", keyword],
    () => searchMovieList({ query: keyword }),
    {
      enabled: !!keyword,
      retry: false,
    }
  );
}
