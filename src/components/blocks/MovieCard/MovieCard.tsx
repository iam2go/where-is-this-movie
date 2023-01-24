import { Suspense } from "react";
import { MovieData } from "@apis/index";
import { useMovieDetail } from "@hooks/quires/useMovieDetail";
import Poster from "@atoms/poster";
import { HighlightWord } from "@atoms/text";
import ProviderList from "@pages/search/ProviderList";
import * as S from "./MovieCard.styled";

type Props = {
  data: MovieData;
  onClick: (id: number, backdrop: string) => void;
  keyword?: string;
};

function MovieCard({ data, onClick, keyword }: Props) {
  const { data: info } = useMovieDetail(data.id.toString());
  return (
    <S.Wrap onClick={() => onClick(data.id, data.backdrop_path)}>
      <Poster url={data.poster_path} width={10} />
      <S.InfoBox>
        <h2>
          {keyword ? (
            <HighlightWord text={data.title} keyword={keyword} />
          ) : (
            data.title
          )}
        </h2>
        {data.release_date && <sub>({data.release_date.split("-")[0]})</sub>}
        <Suspense fallback={<></>}>
          <ProviderList id={data.id} />
        </Suspense>
        <S.Overview>{info?.overview}</S.Overview>
      </S.InfoBox>
    </S.Wrap>
  );
}

export default MovieCard;
