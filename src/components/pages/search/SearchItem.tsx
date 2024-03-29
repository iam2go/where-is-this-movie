import { Suspense } from "react";
import styled from "styled-components";
import { MovieData } from "@apis/index";
import { useMovieDetail } from "@hooks/quires/useMovieDetail";
import Poster from "@atoms/poster";
import { HighlightWord } from "@atoms/text";
import ProviderList from "./ProviderList";

type Props = {
  data: MovieData;
  onClick: (id: number, backdrop: string) => void;
  keyword: string;
};
function SearchItem({ data, onClick, keyword }: Props) {
  const { data: info } = useMovieDetail(data.id.toString());

  return (
    <Wrap onClick={() => onClick(data.id, data.backdrop_path)}>
      <Poster url={data.poster_path} width={10} />
      <InfoBox>
        <h2>
          <HighlightWord text={data.title} keyword={keyword} />
        </h2>
        {data.release_date && <sub>({data.release_date.split("-")[0]})</sub>}
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
    span {
      color: ${({ theme }) => theme.color.point};
    }
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
