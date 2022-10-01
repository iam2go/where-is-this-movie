import { useQuery } from "@tanstack/react-query";
import { getRecommendMovies } from "../../apis";

export function useRecommendMovies(movieID: string, index: number) {
  return useQuery(
    ["movie-detail", movieID],
    () => getRecommendMovies(movieID),
    {
      retry: false,
      select: (data) => ({
        list: data.results.slice(index, index + 4),
        totalCount: data.results.length,
      }),
    }
  );
}
