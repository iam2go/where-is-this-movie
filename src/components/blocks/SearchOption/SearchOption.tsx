import { Suspense, useState } from "react";
import styled from "styled-components";
import { useDiscoverMovie } from "@hooks/quires/useDiscoverMovie";
import { useGenreList } from "@hooks/quires/useGenreList";
import { Button } from "@atoms/button";
import Option from "@atoms/option";
import { FLATFORMS, REGION } from "@constants/options";

type Props = {
  onClose: () => void;
}

function GenresOption(onClick: (id: number | string, active: boolean) => void) {
  const { data: genres } = useGenreList();
  return (
    <OptionBox>
      <h2>장르</h2>
      <Suspense fallback={<>Loading...</>}>
        {genres?.map((genre) => (
          <Option key={genre.id} id={genre.id} onClick={onClick}>
            {genre.name}
          </Option>
        ))}
      </Suspense>
    </OptionBox>
  );
}

function SearchOption({onClose}: Props) {
  const [flatforms, setFlatforms] = useState<number[]>([]);
  const [genre, setGenre] = useState<number[]>([]);
  const [region, setRegion] = useState<string[]>([]);


  const { refetch } = useDiscoverMovie({
    with_watch_providers: flatforms,
    with_genres: genre,
    with_original_language: region,
    page: 1,
  });

  const onClickFlatforms = (targetID: number | string, active: boolean) => {
    if (active) {
      const id = typeof targetID === 'string' ? parseInt(targetID) : targetID;
      setFlatforms((prev) => [...prev, id]);
      return;
    }
    setFlatforms((prev) => prev.filter((id) => id !== targetID));
  };

  const onClickGenre = (targetID: number | string, active: boolean) => {
    if (active) {
      const id = typeof targetID === 'string' ? parseInt(targetID) : targetID;
      setGenre((prev) => [...prev, id]);
      return;
    }
    setGenre((prev) => prev.filter((id) => id !== targetID));
  };

  const onClickRegion = (target: string | number, active: boolean) => {
    if(typeof target === 'number') return;
    if (active) {
      setRegion((prev) => [...prev, target]);
      return;
    }
    setRegion((prev) => prev.filter((code) => code !== target));
  };

  const onClickDiscover = () => {
    refetch();
    onClose();
  };

  return (
    <Wrap>
      <InnerWrap>
        <OptionBox>
          <h2>플랫폼🔮</h2>
          {FLATFORMS.map(({ id, name }) => (
            <Option key={id} id={id} onClick={onClickFlatforms}>
              {name}
            </Option>
          ))}
        </OptionBox>
        {GenresOption(onClickGenre)}
        <OptionBox>
          <h2>국가</h2>
          {REGION.map(({name, subCode}) => (
            <Option key={subCode} id={subCode} onClick={onClickRegion}>{name}</Option>
          ))}
        </OptionBox>

        <ButtonWrap>
          <Button onClick={onClickDiscover}>영화 찾기 🔍</Button>
        </ButtonWrap>
      </InnerWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 26rem;
  height: 50rem;
  background-color: ${({ theme }) => theme.color.background2};
  border-radius: 0 2rem 2rem 2rem;
  position: sticky;
  top: 3rem;
  padding: 5rem 0;
`;

const InnerWrap = styled.div`
  width: 90%;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  overflow-y: scroll;
  margin-right: 3rem;
`

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
