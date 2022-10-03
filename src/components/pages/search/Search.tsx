import { Suspense } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useSearchMovie } from "../../../hooks/quires/useSearchMovie";
import { CheckJongsung } from "../../../utils/hangul";
import Header from "../../blocks/Header";
import SearchItem from "./SearchItem";

function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") as string;
  const { data } = useSearchMovie(keyword, true);
  const navigate = useNavigate();

  const onClick = (movieID: number) => {
    navigate(`/detail/${movieID}`);
  };
  return (
    <>
      <Header />
      <ContentWrap>
        <Text>
          <h2>'{keyword}'</h2>
          {CheckJongsung(keyword, "으로", "로")} 검색한 결과입니다
        </Text>
        {data?.map((movie) => (
          <Suspense fallback={<></>} key={movie.id}>
            <SearchItem data={movie} onClick={onClick} keyword={keyword} />
          </Suspense>
        ))}
      </ContentWrap>
    </>
  );
}

const ContentWrap = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 120rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin: 3rem 0;
`;

const Text = styled.div`
  font-size: 15px;
  margin-bottom: 5rem;
  h2 {
    font-size: 15px;
    color: ${({ theme }) => theme.color.point};
  }
`;

export default Search;
