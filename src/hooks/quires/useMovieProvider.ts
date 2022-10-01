import { useQuery } from "@tanstack/react-query";
import { getMovieProviders } from "../../apis";

type Provider = {
  logo_path: string;
  provider_name: string;
  provider_id: number;
};

export type ProviderType = "flatrate" | "buy" | "rent";

type ProviderList = {
  [key in ProviderType]?: Provider[];
};

export function useMovieProvider(movieID: string) {
  console.log(movieID);
  return useQuery(["movie-detail", movieID], () => getMovieProviders(movieID), {
    select: (data): ProviderList => data.results.KR,
  });
}
