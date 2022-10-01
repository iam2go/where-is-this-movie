import { Suspense } from "react";
import styled from "styled-components";
import { MovieData } from "../../../apis";
import Poster from "../../atoms/poster";
import ProviderList from "./ProviderList";

type Props = {
  data: MovieData;
};
function SearchItem({ data }: Props) {
  return (
    <Wrap>
      <Poster url={data.poster_path} width={12} />
      <InfoBox>
        <h2>{data.title}</h2>
        <sub>({data.release_date.split("-")[0]})</sub>
        <Suspense fallback={<></>}>
          <ProviderList id={data.id} />
        </Suspense>
      </InfoBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: white;
  width: 100%;
  max-width: 80rem;
  border-radius: 1.5rem;
  padding: 2rem 5rem;
  margin-bottom: 3rem;
  box-shadow: 0 3px 0 #e3e2e2;
  display: flex;
`;

const InfoBox = styled.div`
  flex: 2;
  margin-left: 4rem;
  text-align: left;
  h2 {
    margin-right: 0.5rem;
  }
`;

export default SearchItem;
