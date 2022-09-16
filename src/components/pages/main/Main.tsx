import styled from "styled-components";
import { BigLogo } from "../../atoms/logo";
import AutocompleteInput from "../../blocks/AutocompleteInput";

function Main() {
  return (
    <Wrap>
      <BigLogo />
      <AutocompleteInput />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120rem;
  ${({ theme }) => theme.common.absoluteCenter}
  ${({ theme }) => theme.common.flexCenterColumn}
  background-color: #f3f3f3;
`;

export default Main;
