import { useInfiniteQuery } from "@tanstack/react-query";
import { discoverMovieList } from "@apis/index";
import { useRecoilValue } from "recoil";
import { discoverOptionState, discoverSortState } from "@recoil/discover";

export function useDiscoverMovie() {
  const params = useRecoilValue(discoverOptionState);
  const sort_by = useRecoilValue(discoverSortState);

  return useInfiniteQuery(
    ["movie-discover", sort_by],
    ({ pageParam = 1 }) =>
      discoverMovieList({ ...params, sort_by, page: pageParam }),
    {
      // enabled: sor,
      getNextPageParam: ({ total_pages, page }) =>
        total_pages > page && page + 1,
    }
  );
}
