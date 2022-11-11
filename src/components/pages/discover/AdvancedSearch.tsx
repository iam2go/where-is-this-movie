import { Suspense } from "react";
import styled from "styled-components";
import Header from "@blocks/Header";
import TopButton from "@blocks/TopButton";
import MovieList from "./MovieList";
import MovieLoader from "./MovieLoader";
import Select from "@blocks/Select";
import Filter from "./Filter";

const SORT_OPTIONS = [{
key:'des',
value: '오름차순'
}, {
  key: "asc",
  value: "내림차순"
}]

function Discover() {
  return (
    <>
      {/* <Header /> */}
      <ContentWrap>
        <Filter/>
        <div>
        {/* <SelectWrap>
          <Select width="13rem" options={SORT_OPTIONS}/>
        </SelectWrap> */}
        {/* <Suspense fallback={<></>}>
          <MovieList />
        </Suspense> */}
        </div>
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

const SelectWrap = styled.div`
  float: right;
  height: fit-content;
`

export default Discover;
