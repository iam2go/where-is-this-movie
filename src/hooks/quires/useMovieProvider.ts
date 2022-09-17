import { useQuery } from "@tanstack/react-query";
import { getMovieProviders } from "../../apis";

export function useMovieProvider(movieID: string) {
  return useQuery(["movie-detail"], () => getMovieProviders(movieID), {
    select: (data) => data.results.KR,
  });
}
