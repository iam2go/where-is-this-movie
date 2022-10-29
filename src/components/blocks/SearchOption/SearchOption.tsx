import { Suspense } from "react";
import styled from "styled-components";
import { useGenreList } from "../../../hooks/quires/useGenreList";
import { Button } from "../../atoms/button";
import Option from "../../atoms/option";

function SearchOption() {
  const { data: genres } = useGenreList();
  return (
    <Wrap>
      <OptionBox>
        <h2>플랫폼🔮</h2>
        <Option>netflex</Option>
        <Option>watcha</Option>
        <Option>wavve</Option>
        <Option>disney plus</Option>
      </OptionBox>
      <OptionBox>
        <h2>장르</h2>
        <Suspense fallback={<>Loading...</>}>
          {genres?.map((genre) => (
            <Option key={genre.id}>{genre.name}</Option>
          ))}
        </Suspense>
      </OptionBox>
      <OptionBox>
        <h2>국가</h2>
        <Option>한국</Option>
        <Option>미국</Option>
        <Option>프랑스</Option>
        <Option>일본</Option>
      </OptionBox>

      <ButtonWrap>
        <Button onClick={() => {}}>영화 찾기 🔍</Button>
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
