import { useQuery } from "@tanstack/react-query";
import { getRecommendMovies } from "../../apis";

export function useRecommendMovies(movieID: string, index: number) {
  return useQuery(
    ["movie-recommend", movieID],
    () => getRecommendMovies(movieID),
    {
      retry: false,
      select: (data) => {
        return {
          list: data?.results?.slice(index, index + 4) || null,
          totalCount: data?.results?.length,
        };
      },
    }
  );
}
