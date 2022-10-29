import { useQuery } from "@tanstack/react-query";
import { getGenreList } from "../../apis";

export function useGenreList() {
  return useQuery(["genre"], () => getGenreList(), {
    retry: true,
    staleTime: Infinity,
  });
}
