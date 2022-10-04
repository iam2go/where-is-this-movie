import { Suspense } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useInfiniteSearch } from "../../../hooks/quires/useSearchMovie";
import { CheckJongsung } from "../../../utils/hangul";
import Header from "../../blocks/Header";
import SearchItem from "./SearchItem";

function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") as string;
  const { data, fetchNextPage, hasNextPage } = useInfiniteSearch(keyword);
  const navigate = useNavigate();

  const onClick = (movieID: number) => {
    navigate(`/detail/${movieID}`);
  };
  const onClickFetch = () => {
    fetchNextPage();
  };

  return (
    <>
      <Header />
      <ContentWrap>
        <Text>
          <h2>'{keyword}'</h2>
          {CheckJongsung(keyword, "으로", "로")} 검색한 결과입니다
        </Text>
        {data?.pages[0].results?.map((movie) => (
          <Suspense fallback={<></>} key={movie.id}>
            <SearchItem data={movie} onClick={onClick} keyword={keyword} />
          </Suspense>
        ))}
        {hasNextPage && <Button onClick={onClickFetch}>read more...</Button>}
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

const Button = styled.div`
  margin: 1rem 0 5rem;
  font-size: 15px;
  cursor: pointer;
`;

export default Search;
