import Skeleton from "../../atoms/skeleton";
import * as S from "./MovieCard.styled";

function MovieCardLoader() {
    return ( <S.LoaderWrap>
        <Skeleton width={10} height={15} />
        <S.InfoBox>
          <Skeleton width={25} height={3} />
          <S.ProviderBoxLoader>
            <Skeleton width={8} height={3.6} />
            <Skeleton width={8} height={3.6} />
          </S.ProviderBoxLoader>
          <Skeleton fullWidth height={1.8} />
          <Skeleton width={25} height={1.8} />
        </S.InfoBox>
      </S.LoaderWrap> );
}

export default MovieCardLoader;