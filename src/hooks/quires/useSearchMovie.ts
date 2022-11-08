import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {  searchMovieList } from "../../apis";

export function useSearchMovie(keyword: string, all = false) {
  return useQuery(
    ["movie-list", keyword],
    () => searchMovieList({ query: keyword }),
    {
      enabled: !!keyword,
      retry: false,
      select: (data) => {
        const movieList = data.results.sort(
          (a, b) => b.popularity - a.popularity
        );
        return all ? movieList : movieList.slice(0, 6);
      },
    }
  );
}

export function useInfiniteSearch(keyword: string) {
  return useInfiniteQuery(
    ["infinite-movie-list", keyword],
    ({ pageParam = 1 }) => searchMovieList({ query: keyword, page: pageParam }),
    {
      getNextPageParam: ({ total_pages, page }) =>
        total_pages > page && page + 1,
    }
  );
}
