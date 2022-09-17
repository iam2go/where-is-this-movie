import { useQuery } from "@tanstack/react-query";
import { getMovieProviders } from "../../apis";

type Provider = {
  logo_path: string;
  provider_name: string;
  provider_id: number;
};

type ProviderList = {
  buy?: Provider[];
  flatrate?: Provider[];
  rent?: Provider[];
};

export function useMovieProvider(movieID: string) {
  return useQuery(["movie-detail"], () => getMovieProviders(movieID), {
    select: (data): ProviderList => data.results.KR,
  });
}
