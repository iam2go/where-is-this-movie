import { atom } from "recoil";

export type Filter = {
  platforms: number[];
  genre: number[];
  region: string[];
};

export const discoverOptionState = atom<Filter>({
  key: "optionState",
  default: {
    platforms: [],
    genre: [],
    region: [],
  },
});

export const discoverSortState = atom<string>({
  key: "sortState",
  default: "popularity.desc",
});
