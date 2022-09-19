import styled from "styled-components";
import {
  ProviderType,
  useMovieProvider,
} from "../../../hooks/quires/useMovieProvider";
import { TabButton } from "../../atoms/button";
import { PlatformLogo } from "../../atoms/logo";
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
        <ResultBox>
          {data &&
            providerTypes.map((key) => (
              <TabPanel id={key} key={key}>
                {data[key]?.map(({ logo_path, provider_id }) => (
                  <PlatformLogo
                    key={provider_id}
                    url={logo_path}
                    style={{ margin: "0.5rem" }}
                  />
                ))}
                {!data[key] && "데이터가 존재하지 않습니다"}
              </TabPanel>
            ))}
          {!data && "현재 볼 수 있는 곳이 없네요😥"}
        </ResultBox>
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

const ResultBox = styled.div`
  padding: 2rem;
  border: 2px solid ${({ theme }) => theme.color.background};
  border-radius: 0.5rem;
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

export default ProviderBox;
