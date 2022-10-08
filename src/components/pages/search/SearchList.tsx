import { Suspense, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useInfiniteSearch } from "../../../hooks/quires/useSearchMovie";
import SearchItem from "./SearchItem";

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
          <SearchItem data={movie} onClick={onClick} keyword={keyword} />
        </Suspense>
      ))}
      <div ref={ref} />
    </>
  );
}

export default SearchList;
