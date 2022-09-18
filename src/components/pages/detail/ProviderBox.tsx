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
      <Text>여기서 볼 수 있어요👀</Text>
      <Tabs defaultTabId={"flatrate"}>
        <Tab id="flatrate">
          <TabButton>스트리밍</TabButton>
        </Tab>
        <Tab id="buy">
          <TabButton>구매</TabButton>
        </Tab>
        <Tab id="rent">
          <TabButton>대여</TabButton>
        </Tab>
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
  margin: 2rem 0;
`;

const Text = styled.h2`
  font-size: 16px;
`;

const ResultBox = styled.div`
  padding: 2rem;
  border: 2px solid ${({ theme }) => theme.color.background};
  border-top-color: ${({ theme }) => theme.color.point};
  border-radius: 0.5rem;
`;

export default ProviderBox;
