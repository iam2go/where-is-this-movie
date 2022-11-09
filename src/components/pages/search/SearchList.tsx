import { Suspense, useCallback,  useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useInfiniteSearch } from "@hooks/quires/useSearchMovie";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import MovieCard from "@blocks/MovieCard";

type Props = {
  keyword: string;
};

const options = { threshold: 1.0};
function SearchList({ keyword }: Props) {
  const { data, fetchNextPage, hasNextPage} = useInfiniteSearch(keyword);
  const navigate = useNavigate();

  const onClick = (movieID: number) => {
    navigate(`/detail/${movieID}`);
  };

  const onIntersect = useCallback(([entry] : IntersectionObserverEntry[]) => {
    if(entry.isIntersecting && hasNextPage){
      fetchNextPage();
    }
  },[fetchNextPage, hasNextPage]);

  const target  = useIntersectionObserver(onIntersect, options);
  const movieList = useMemo(() => data ? data.pages.flatMap(({results}) => results) : [], [data]);


  return (
    <>
      {movieList.map((movie) => (
        <Suspense fallback={<></>} key={movie.id}>
          <MovieCard data={movie} onClick={onClick} keyword={keyword} />
        </Suspense>
      ))}
      {data && data.pages[0].total_pages > 1 && !hasNextPage && (
        <AlertMessage>모든 결과를 조회하셨습니다</AlertMessage>
      )}
      {data?.pages[0].total_results === 0 && (
        <AlertMessage>키워드와 일치하는 영화가 없습니다😥</AlertMessage>
      )}
       <Observer ref={target} />
    </>
  );
}

const AlertMessage = styled.div`
  font-size: 16px;
  margin: 5rem 0;
`;

const Observer = styled.div`
  height: 2rem;
`

export default SearchList;
