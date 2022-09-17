import styled from "styled-components";

type Props = {
  text: string;
};
function Tag({ text }: Props) {
  return <TagWrap>{text}</TagWrap>;
}

const TagWrap = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.color.background2};
  margin: 0.2rem 0.3rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
`;

export default Tag;
