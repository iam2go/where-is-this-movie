import { useInfiniteQuery } from "@tanstack/react-query";
import { discoverMovieList, DiscoverOptions } from "../../apis";

export function useDiscoverMovie(params?: DiscoverOptions) {
  return useInfiniteQuery(
    ["movie-discover"],
    ({ pageParam = 1 }) => discoverMovieList({ ...params, page: pageParam }),
    {
      enabled: false,
      getNextPageParam: ({ total_pages, page }) =>
        total_pages > page && page + 1,
    }
  );
}
