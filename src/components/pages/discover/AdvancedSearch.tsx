import styled from "styled-components";
import TopButton from "@blocks/TopButton";
import Filter from "./Filter";
import Header from "@blocks/Header";
import DiscoverResult from "./DiscoverResult";

function Discover() {
  return (
    <>
      <Header />
      <ContentWrap>
        <Filter />
        <DiscoverResult />
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
