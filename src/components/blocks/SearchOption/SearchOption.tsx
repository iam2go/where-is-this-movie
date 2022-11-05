import { Suspense, useState } from "react";
import styled from "styled-components";
import { useDiscoverMovie } from "../../../hooks/quires/useDiscoverMovie";
import { useGenreList } from "../../../hooks/quires/useGenreList";
import { Button } from "../../atoms/button";
import Option from "../../atoms/option";

const FLATFORMS = [
  {
    id: 8,
    name: "netflex",
  },
  {
    id: 337,
    name: "disney plus",
  },
  {
    id: 356,
    name: "wavve",
  },
  {
    id: 97,
    name: "watcha",
  },
];

function GenresOption() {
  const { data: genres } = useGenreList();
  return (
    <OptionBox>
      <h2>장르</h2>
      <Suspense fallback={<>Loading...</>}>
        {genres?.map((genre) => (
          <Option key={genre.id} id={genre.id}>
            {genre.name}
          </Option>
        ))}
      </Suspense>
    </OptionBox>
  );
}

function SearchOption() {
  const [flatforms, setFlatforms] = useState<number[]>([]);
  const { refetch } = useDiscoverMovie({
    with_watch_providers: flatforms
      .map((id: number) => id.toString())
      .join(","),
    page: 1,
  });

  const onClickFlatforms = (targetID: number, active: boolean) => {
    if (active) {
      setFlatforms((prev) => [...prev, targetID]);
      return;
    }
    setFlatforms((prev) => prev.filter((id) => id !== targetID));
  };

  const onClickDiscover = () => {
    refetch();
  };

  return (
    <Wrap>
      <OptionBox>
        <h2>플랫폼🔮</h2>
        {FLATFORMS.map(({ id, name }) => (
          <Option key={id} id={id} onClick={onClickFlatforms}>
            {name}
          </Option>
        ))}
      </OptionBox>
      {GenresOption()}
      <OptionBox>
        <h2>국가</h2>
        <Option id={1}>한국</Option>
        <Option id={2}>미국</Option>
        <Option id={3}>프랑스</Option>
        <Option id={4}>일본</Option>
      </OptionBox>

      <ButtonWrap>
        <Button onClick={onClickDiscover}>영화 찾기 🔍</Button>
      </ButtonWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.color.background2};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32rem;
  padding: 5rem 2rem;
  border-radius: 2rem;
  height: fit-content;
  margin-right: 3rem;
  position: sticky;
  top: 3rem;
`;

const OptionBox = styled.div`
  margin: 2rem 0;
  width: 100%;
  h2 {
    font-size: 1.4rem;
    color: #454545;
    display: block;
    margin-bottom: 0.8rem;
  }
`;

const ButtonWrap = styled.div`
  margin-top: 5rem;
`;

export default SearchOption;
