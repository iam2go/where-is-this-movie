import { Suspense, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useInfiniteSearch } from "../../../hooks/quires/useSearchMovie";
import MovieCard from "../../blocks/MovieCard";

type Props = {
  keyword: string;
};
function SearchList({ keyword }: Props) {
  const { data, fetchNextPage, hasNextPage } = useInfiniteSearch(keyword);
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  const onClick = (movieID: number) => {
    navigate(`/detail/${movieID}`);
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <>
      {data?.pages[0].results?.map((movie) => (
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
      <div ref={ref} />
    </>
  );
}

const AlertMessage = styled.div`
  font-size: 16px;
  margin: 5rem 0;
`;

export default SearchList;
