import styled from "styled-components";


type StyledProps = {
  width?: number;
  height?:number;
  gray?: boolean;
}

type Props = StyledProps & {
  onClick: () => void;
  children: React.ReactNode;
};

function Button({ width, height, gray, onClick, children }: Props) {
  return <StyledButton width={width} height={height} gray={gray} onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.div<StyledProps>`
  background-color: ${({ gray ,theme }) => gray ? theme.color.background2 : theme.color.point};
  padding: 1rem 1.4rem;
  border-radius: 1.2rem;
  font-size: 14px;
  color: white;
  position: relative;
  width: ${({width}) => width ? width+'rem' : 'fit-contents'};
  height: ${({height}) => height ? height+'rem' : 'fit-contents'};
  cursor: pointer;
  &:hover {
    background-color: #c03e33;
  }
`;
export default Button;
