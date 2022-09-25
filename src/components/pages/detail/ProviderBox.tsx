import React, { Suspense } from "react";
import styled from "styled-components";
import Tabs, { Tab } from "../../blocks/Tab";

const ProviderContent = React.lazy(() => import("./ProviderContent"));

type Props = {
  id: string;
};

function ProviderBox({ id }: Props) {
  return (
    <Wrap>
      <Tabs defaultTabId={"flatrate"}>
        <StyledTab id="flatrate">스트리밍</StyledTab>
        <StyledTab id="buy">구매</StyledTab>
        <StyledTab id="rent">대여</StyledTab>
        <ContentsWrap>
          <Suspense fallback={<div>loading...</div>}>
            <ProviderContent id={id} />
          </Suspense>
        </ContentsWrap>
      </Tabs>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: fit-content;
  flex-grow: 3;
  margin: 2.5rem 0;
`;

const StyledTab = styled(Tab)`
  width: fit-content;
  height: fit-content;
  padding: 0.6rem 1.4rem;
  border-radius: 1rem 1rem 0 0;
  margin-right: 0.7rem;
  font-family: "LeferiPoint-bold";
  &:first-child {
    margin-left: 0.5rem;
  }
  &.selected {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.point};
  }
`;

const ContentsWrap = styled.div`
  border: 2px solid ${({ theme }) => theme.color.background};
  border-radius: 0.5rem;
  width: 100%;
  height: fit-content;
  min-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProviderBox;
