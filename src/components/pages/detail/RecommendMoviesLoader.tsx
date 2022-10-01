import styled from "styled-components";
import Skeleton from "../../atoms/skeleton";

function RecommendMoviesLoader() {
  return (
    <Wrap>
      <h2>비슷한 작품</h2>
      <MovieList>
        {Array.from({ length: 4 }, (_, i) => (
          <div className="skeleton" key={i}>
            <Skeleton width={18} height={27} />
            <Skeleton width={15} height={2.4} />
          </div>
        ))}
      </MovieList>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 5rem;
  box-sizing: border-box;
  padding: 0 20rem;
`;

const MovieList = styled.div`
  display: flex;
  margin: 2rem 0;
  .skeleton {
    margin: 1rem;
    text-align: center;
  }
`;

export default RecommendMoviesLoader;
