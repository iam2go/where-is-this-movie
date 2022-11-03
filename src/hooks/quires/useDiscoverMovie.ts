import { useQuery } from "@tanstack/react-query";
import { discoverMovieList, DiscoverOptions } from "../../apis";

export function useDiscoverMovie(params?: DiscoverOptions) {
  return useQuery(
    ["movie-discover"],
    () => discoverMovieList({ ...params, page: 1 }),
    {
      enabled: true,
      retry: false,
    }
  );
}
