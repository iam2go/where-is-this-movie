import { useInfiniteQuery } from "@tanstack/react-query";
import { discoverMovieList, MovieData, DiscoverOptions } from "../../apis";

export function useDiscoverMovie(params?: DiscoverOptions) {
  return useInfiniteQuery(
    ["movie-discover"],
    ({ pageParam = 1 }) => discoverMovieList({ ...params, page: pageParam }),
    {
      enabled: false,
      select: ({ pages, pageParams }) => {
        const current = pages[pages.length - 1];
        const results = pages.reduce((results: MovieData[] | [], data) => {
          return [...results, ...data.results];
        }, []);

        return {
          pageParams,
          pages: [{ ...current, results }],
        };
      },
      getNextPageParam: ({ total_pages, page }) =>
        total_pages > page && page + 1,
    }
  );
}
