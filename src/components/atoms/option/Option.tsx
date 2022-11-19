import { useCallback, useState } from "react";
import styled from "styled-components";
import cn from "classnames";
import { Filter } from "@blocks/Dialog/DiscoverDialog";

type Props = {
  children: React.ReactNode;
  onClick?: (type: keyof Filter, id: number | string, active: boolean) => void;
  id: number | string;
  type: keyof Filter;
  active: boolean;
};
function Option({ children, onClick, id, type, active }: Props) {
  const handleClick = useCallback(() => {
    onClick?.(type, id, !active);
  }, [active, id, onClick, type]);

  return (
    <Block className={cn({ active })} onClick={handleClick}>
      {children}
    </Block>
  );
}

const Block = styled.div`
  cursor: pointer;
  display: inline-block;
  background-color: ${({ theme }) => theme.color.background};
  padding: 0.8rem 1.4rem;
  margin: 0.5rem 0;
  margin-right: 0.5rem;
  border-radius: 2rem;
  font-size: 12px;
  border: 2px solid white;
  &:hover {
    background-color: ${({ theme }) => theme.color.background2};
  }

  &.active {
    border-color: ${({ theme }) => theme.color.point};
    border-width: 2px;
    border-style: solid;
    background-color: ${({ theme }) => theme.color.point};
    color: white;
  }
`;

export default Option;
