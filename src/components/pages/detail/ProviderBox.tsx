import styled from "styled-components";
import {
  ProviderType,
  useMovieProvider,
} from "../../../hooks/quires/useMovieProvider";
import { PlatformLogo } from "../../atoms/logo";
import PlatformBlock from "../../blocks/PlatformBlock";
import Tabs, { Tab, TabPanel } from "../../blocks/Tab";

type Props = {
  id: string;
};

const providerTypes = ["buy", "flatrate", "rent"] as ProviderType[];

function ProviderBox({ id }: Props) {
  const { data } = useMovieProvider(id);
  return (
    <Wrap>
      <Tabs defaultTabId={"flatrate"}>
        <StyledTab id="flatrate">스트리밍</StyledTab>
        <StyledTab id="buy">구매</StyledTab>
        <StyledTab id="rent">대여</StyledTab>
        {data &&
          providerTypes.map((key) => (
            <StyledTabPanel id={key} key={key}>
              {data[key]?.map(({ logo_path, provider_id, provider_name }) => (
                <PlatformBlock
                  key={provider_id}
                  url={logo_path}
                  text={provider_name}
                />
              ))}
              {!data[key] && "데이터가 존재하지 않습니다"}
            </StyledTabPanel>
          ))}
        {!data && <EmptyBox>{"현재 볼 수 있는 곳이 없네요😥"}</EmptyBox>}
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

const StyledTabPanel = styled(TabPanel)`
  padding: 2rem 1.6rem;
  border: 2px solid ${({ theme }) => theme.color.background};
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const EmptyBox = styled.div`
  border: 2px solid ${({ theme }) => theme.color.background};
  border-radius: 0.5rem;
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProviderBox;
