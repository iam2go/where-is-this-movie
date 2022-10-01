import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SmallLogo } from "../../atoms/logo";
import AutocompleteInput from "../AutocompleteInput";

function Header() {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate(`/`);
  };
  const onClickResult = (movieID: number) => {
    navigate(`/detail/${movieID}`);
  };

  const onClickMore = (keyword: string) => {
    navigate(`/search?keyword=${keyword}`);
  };
  return (
    <StyledHeader>
      <LogoWrap onClick={onClickLogo}>
        <SmallLogo />
      </LogoWrap>
      <SearchWrap>
        <AutocompleteInput
          onClickResult={onClickResult}
          onClickMore={onClickMore}
        />
      </SearchWrap>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  top: 0;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 333;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoWrap = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
  cursor: pointer;
`;
const SearchWrap = styled.div`
  margin-right: 4rem;
`;

export default Header;
