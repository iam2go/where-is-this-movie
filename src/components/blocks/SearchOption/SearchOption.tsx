import { Suspense } from "react";
import styled from "styled-components";
import { useGenreList } from "@hooks/quires/useGenreList";
import Option from "@atoms/option";
import { PLATFORMS, REGION } from "@constants/options";
import { Filter } from "@blocks/Dialog/DiscoverDialog";

type Props = {
  onClick: (type: keyof Filter, id: number | string, active: boolean) => void;
  data: Array<number | string>;
};

function GenresOption({ onClick, data }: Props) {
  const { data: genres } = useGenreList();
  return (
    <OptionBox>
      <h2>장르</h2>
      <Suspense fallback={<>Loading...</>}>
        {genres?.map((genre) => (
          <Option
            key={genre.id}
            id={genre.id}
            onClick={onClick}
            type="genre"
            active={data.includes(genre.id)}
          >
            {genre.name}
          </Option>
        ))}
      </Suspense>
    </OptionBox>
  );
}

function PlatformsOption({ onClick, data }: Props) {
  return (
    <OptionBox>
      <h2>플랫폼🔮</h2>
      {PLATFORMS.map(({ id, name }) => (
        <Option
          key={id}
          id={id}
          onClick={onClick}
          type="platforms"
          active={data.includes(id)}
        >
          {name}
        </Option>
      ))}
    </OptionBox>
  );
}

function RegionsOption({ onClick, data }: Props) {
  return (
    <OptionBox>
      <h2>국가</h2>
      {REGION.map(({ name, subCode }) => (
        <Option
          key={subCode}
          id={subCode}
          onClick={onClick}
          type="region"
          active={data.includes(subCode)}
        >
          {name}
        </Option>
      ))}
    </OptionBox>
  );
}

const OptionBox = styled.div`
  margin: 2rem 2rem;
  width: 100%;
  text-align: left;
  h2 {
    font-size: 1.4rem;
    color: #454545;
    display: block;
    margin-bottom: 0.8rem;
  }
`;

export { PlatformsOption, GenresOption, RegionsOption };
