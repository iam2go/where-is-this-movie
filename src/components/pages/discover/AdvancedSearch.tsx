import { Suspense } from "react";
import styled from "styled-components";
import Header from "../../blocks/Header";
import SearchOption from "../../blocks/SearchOption";
import TopButton from "../../blocks/TopButton";
import MovieList from "./MovieList";
import MovieLoader from "./MovieLoader";

function Discover() {
  return (
    <>
      <Header />
      <ContentWrap>
        <SearchOption />
        <Suspense fallback={<></>}>
          <MovieList />
        </Suspense>
      </ContentWrap>
      <TopButton />
    </>
  );
}

const ContentWrap = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 100rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin-top: 5rem;
`;

export default Discover;
