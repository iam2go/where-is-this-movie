import styled from "styled-components";
import { BigLogo } from "../../atoms/logo";

function Main() {
  return (
    <Wrap>
      <BigLogo />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120rem;
  ${({ theme }) => theme.common.absoluteCenter}
  ${({ theme }) => theme.common.flexCenterColumn}
  background-color: #d8e2dc;
`;

export default Main;
