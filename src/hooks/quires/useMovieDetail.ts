import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "@apis/index";

export function useMovieDetail(movieID: string) {
  return useQuery(["movie-detail", movieID], () => getMovieDetail(movieID), {
    retry: false,
  });
}
