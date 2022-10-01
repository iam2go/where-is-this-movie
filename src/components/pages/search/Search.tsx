import { Suspense } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useSearchMovie } from "../../../hooks/quires/useSearchMovie";
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
      {/* <Header /> */}
      <ContentWrap>
        {data?.map((movie) => (
          <Suspense fallback={<></>} key={movie.id}>
            <SearchItem data={movie} onClick={onClick} />
          </Suspense>
        ))}
      </ContentWrap>
    </>
  );
}

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120rem;
  ${({ theme }) => theme.common.absoluteCenter}
  text-align: center;
`;

export default Search;
