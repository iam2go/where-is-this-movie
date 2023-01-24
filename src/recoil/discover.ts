import { atom } from "recoil";

export type Filter = {
  platforms: number[];
  genre: number[];
  region: string[];
  keyword: string[];
};

export const discoverOptionState = atom<Filter>({
  key: "optionState",
  default: {
    platforms: [8],
    genre: [],
    region: [],
    keyword: [],
  },
});

export const discoverSortState = atom<string>({
  key: "sortState",
  default: "popularity.desc",
});
