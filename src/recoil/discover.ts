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
