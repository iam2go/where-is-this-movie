import styled from "styled-components";
import {
  ProviderType,
  useMovieProvider,
} from "@hooks/quires/useMovieProvider";
import PlatformBlock from "@blocks/PlatformBlock";
import { TabPanel } from "@blocks/Tab";

type Props = {
  id: string;
};

const providerTypes = ["buy", "flatrate", "rent"] as ProviderType[];

function ProviderContent({ id }: Props) {
  const { data } = useMovieProvider(id);
  return (
    <>
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
      {!data && <div>{"현재 볼 수 있는 곳이 없네요😥"}</div>}
    </>
  );
}

const StyledTabPanel = styled(TabPanel)`
  padding: 2rem 1.6rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export default ProviderContent;
