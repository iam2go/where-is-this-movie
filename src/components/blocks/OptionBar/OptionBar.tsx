import { Filter } from "@blocks/Dialog/DiscoverDialog";
import { discoverOptionState } from "@recoil/discover";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

type Theme = {
  title: string;
  filter: Filter;
};

type StyledProps = {
  selected: boolean;
};

const Themes = [
  {
    title: "지금 넷플릭스 인기 영화✨",
    filter: {
      platforms: [8],
      genre: [],
      region: [],
    },
  },
  {
    title: "watcha 인기 영화",
    filter: {
      platforms: [97],
      genre: [],
      region: [],
    },
  },
  {
    title: "인기 애니메이션",
    filter: {
      platforms: [],
      genre: [16],
      region: [],
    },
  },
  {
    title: "마블 유니버스",
    filter: {
      platforms: [],
      genre: [],
      region: [],
      keyword: "180547",
    },
  },
];

function OptionBar() {
  const [selected, setSelected] = useState<Theme | null>(Themes[0]);
  const setDiscoverFilter = useSetRecoilState(discoverOptionState);

  const onClick = (theme: Theme) => {
    setSelected(theme);
  };

  useEffect(() => {
    if (!selected) return;
    setDiscoverFilter(selected.filter);
  }, [selected, setDiscoverFilter]);

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
