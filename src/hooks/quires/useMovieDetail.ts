import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../../apis";

export function useMovieDetail(movieID: string) {
  return useQuery(["movie-list"], () => getMovieDetail(movieID), {
    retry: false,
  });
}
