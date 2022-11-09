import styled from "styled-components";
import { useMovieProvider } from "@hooks/quires/useMovieProvider";
import PlatformBlock from "@blocks/PlatformBlock";

type Props = {
  id: number;
};
function ProviderList({ id }: Props) {
  const { data } = useMovieProvider(id.toString());
  return (
    <Wrap>
      {data?.["flatrate"]?.map(({ logo_path, provider_id, provider_name }) => (
        <PlatformBlock key={provider_id} url={logo_path} text={provider_name} />
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  margin: 1.2rem 0;
`;

export default ProviderList;
