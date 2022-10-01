import { Suspense } from "react";
import styled from "styled-components";
import { MovieData } from "../../../apis";
import { useMovieDetail } from "../../../hooks/quires/useMovieDetail";
import Poster from "../../atoms/poster";
import ProviderList from "./ProviderList";

type Props = {
  data: MovieData;
  onClick: (id: number) => void;
};
function SearchItem({ data, onClick }: Props) {
  const { data: info } = useMovieDetail(data.id.toString());
  return (
    <Wrap onClick={() => onClick(data.id)}>
      <Poster url={data.poster_path} width={10} />
      <InfoBox>
        <h2>{data.title}</h2>
        <sub>({data.release_date.split("-")[0]})</sub>
        <Suspense fallback={<></>}>
          <ProviderList id={data.id} />
        </Suspense>
        <Overview>{info?.overview}</Overview>
      </InfoBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: white;
  width: 100%;
  max-width: 80rem;
  border-radius: 1.5rem;
  padding: 2rem 4rem;
  margin: auto;
  margin-bottom: 3rem;
  box-shadow: 0 3px 0 #e3e2e2;
  display: flex;
  cursor: pointer;
`;

const InfoBox = styled.div`
  flex: 2;
  margin-left: 4rem;
  text-align: left;
  h2 {
    margin-right: 0.5rem;
  }
`;

const Overview = styled.div`
  font-size: 13px;
  line-height: 1.5;
  overflow: hidden;
  word-wrap: break-word;
  /* height: 6.1rem; */
  white-space: normal;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  display: flexbox;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default SearchItem;
