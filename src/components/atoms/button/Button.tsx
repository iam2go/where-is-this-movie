import styled from "styled-components";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};
function Button({ onClick, children }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.div`
  background-color: ${({ theme }) => theme.color.point};
  padding: 1rem 1.4rem;
  border-radius: 1.2rem;
  font-size: 14px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #c03e33;
  }
`;
export default Button;
