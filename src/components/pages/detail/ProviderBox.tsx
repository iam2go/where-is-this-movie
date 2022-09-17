import styled from "styled-components";
import { useMovieProvider } from "../../../hooks/quires/useMovieProvider";
import { PlatformLogo } from "../../atoms/logo";

type Props = {
  id: string;
};

function ProviderBox({ id }: Props) {
  const { data } = useMovieProvider(id);
  return (
    <Wrap>
      <Text>여기서 볼 수 있어요!</Text>
      {data?.flatrate?.map(({ logo_path, provider_id }) => (
        <PlatformLogo
          key={provider_id}
          url={logo_path}
          style={{ margin: "0.5rem" }}
        />
      ))}
      {data?.buy?.map(({ logo_path, provider_id }) => (
        <PlatformLogo
          key={provider_id}
          url={logo_path}
          style={{ margin: "0.5rem" }}
        />
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: fit-content;
  flex-grow: 3;
  margin: 3rem 0;
`;

const Text = styled.h2`
  font-size: 16px;
`;
export default ProviderBox;
