import { Filter } from "@recoil/discover";
import { discoverOptionState } from "@recoil/discover";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

type Theme = {
  title: string;
  filters: Filter;
};

type StyledProps = {
  selected: boolean;
};

const Themes: Theme[] = [
  {
    title: "지금 넷플릭스 인기 영화✨",
    filters: {
      platforms: [8],
      genre: [],
      region: [],
      keyword: [],
    },
  },
  {
    title: "watcha 인기 영화",
    filters: {
      platforms: [97],
      genre: [],
      region: [],
      keyword: [],
    },
  },
  {
    title: "인기 애니메이션",
    filters: {
      platforms: [],
      genre: [16],
      region: [],
      keyword: [],
    },
  },
  {
    title: "마블 유니버스",
    filters: {
      platforms: [],
      genre: [],
      region: [],
      keyword: ["180547"],
    },
  },
];

function OptionBar() {
  const [selected, setSelected] = useState<Theme | null>(Themes[0]);
  const [discoverFilters, setDiscoverFilters] =
    useRecoilState(discoverOptionState);

  const onClick = (theme: Theme) => {
    setSelected(theme);
    setDiscoverFilters(theme.filters);
  };

  useEffect(() => {
    console.log(discoverFilters);
    let changeTheme = null;
    Themes.forEach((theme) => {
      if (
        (Object.keys(theme.filters) as Array<keyof Filter>).every(
          (key) =>
            theme.filters[key].length === discoverFilters[key].length &&
            !theme.filters[key].some(
              (value: string | number, i: number) =>
                discoverFilters[key][i] !== value
            )
        )
      )
        changeTheme = theme;
    });
    setSelected(changeTheme);
  }, [discoverFilters]);

  return (
    <div>
      {Themes.map((option) => (
        <Option
          key={option.title}
          onClick={() => onClick(option)}
          selected={selected?.title === option.title}
        >
          {option.title}
        </Option>
      ))}
    </div>
  );
}

const Option = styled.div<StyledProps>`
  cursor: pointer;
  display: inline-block;
  background-color: ${({ theme }) => theme.color.background2};
  padding: 0.8rem 1.4rem;
  margin: 0.5rem 0;
  margin-right: 0.5rem;
  border-radius: 2rem;
  font-size: 12px;
  border: 2px solid white;
  color: ${({ selected }) => (selected ? "white" : "#212426")};
  background-image: ${({ selected }) =>
    selected ? "linear-gradient(90deg, #f4786c, #f79876)" : "none"};
`;

export default OptionBar;
