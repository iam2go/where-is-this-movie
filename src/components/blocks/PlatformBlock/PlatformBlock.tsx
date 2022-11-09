import styled from "styled-components";
import { PlatformLogo } from "@atoms/logo";

type Props = {
  url: string;
  text: string;
};
function PlatformBlock({ url, text }: Props) {
  return (
    <StyledBlock>
      <PlatformLogo url={url} />
      <Text>{text.toLowerCase()}</Text>
    </StyledBlock>
  );
}

const StyledBlock = styled.div`
  width: fit-content;
  height: 2.6rem;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 1.2rem;
  padding: 0.5rem;
  display: flex;
  margin: 0.4rem;
`;

const Text = styled.div`
  width: fit-content;
  margin: 0 0.6rem;
  ${({ theme }) => theme.common.flexCenter};
`;

export default PlatformBlock;
