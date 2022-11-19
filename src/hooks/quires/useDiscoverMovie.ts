import { useInfiniteQuery } from "@tanstack/react-query";
import { discoverMovieList } from "@apis/index";
import { useRecoilValue } from "recoil";
import { discoverOptionState } from "@recoil/discover";

export function useDiscoverMovie() {
  const params = useRecoilValue(discoverOptionState);
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
