import { useCallback, useState } from "react";
import styled from "styled-components";
import cn from "classnames";

type Props = {
  children: React.ReactNode;
};
function Option({ children }: Props) {
  const [active, setActive] = useState(false);

  const onClick = useCallback(() => {
    setActive((prev) => !prev);
  }, []);
  return (
    <Block className={cn({ active })} onClick={onClick}>
      {children}
    </Block>
  );
}

const Block = styled.div`
  cursor: pointer;
  display: inline-block;
  background-color: white;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  margin-right: 0.5rem;
  border-radius: 2rem;
  border: 2px solid white;
  &:hover {
    background-color: ${({ theme }) => theme.color.background};
  }

  &.active {
    border-color: ${({ theme }) => theme.color.point};
    border-width: 2px;
    border-style: solid;
    color: ${({ theme }) => theme.color.point};
    /* background-color: rgba(242, 71, 95, 0.2); */
  }
`;

export default Option;