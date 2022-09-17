import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BigLogo } from "../../atoms/logo";
import AutocompleteInput from "../../blocks/AutocompleteInput";

function Main() {
  const navigate = useNavigate();
  const onClickResult = (movieID: number) => {
    navigate(`/detail/${movieID}`);
  };

  return (
    <Wrap>
      <BigLogo />
      <AutocompleteInput onClickResult={onClickResult} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120rem;
  ${({ theme }) => theme.common.absoluteCenter}
  ${({ theme }) => theme.common.flexCenterColumn}
`;

export default Main;
