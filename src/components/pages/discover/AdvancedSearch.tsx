import styled from "styled-components";
import TopButton from "@blocks/TopButton";
import Filter from "./Filter";
import Header from "@blocks/Header";
import DiscoverResult from "./DiscoverResult";
import OptionBar from "@blocks/OptionBar";

function Discover() {
  return (
    <>
      <Header />
      <ContentWrap>
        <NavBar>
          <Filter />
          <OptionBar />
        </NavBar>
        <DiscoverResult />
      </ContentWrap>
      <TopButton />
    </>
  );
}

const NavBar = styled.div`
  display: flex;
  align-items: center;
`;
const ContentWrap = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 100rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export default Discover;
