import { useQuery } from "@tanstack/react-query";
import { getGenreList } from "@apis/index";

export function useGenreList() {
  return useQuery(["genre"], () => getGenreList(), {
    retry: true,
    staleTime: Infinity,
  });
}
