import styled from "styled-components";
import Header from "../../blocks/Header";
import SearchOption from "../../blocks/SearchOption";

function Discover() {
  return (
    <>
      <Header />
      <ContentWrap>
        <SearchOption />
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
`;

export default Discover;
