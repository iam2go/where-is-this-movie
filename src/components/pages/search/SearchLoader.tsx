import styled from "styled-components";
import Skeleton from "../../atoms/skeleton";

function SearchLoader() {
  return (
    <>
      {Array.from({ length: 3 }, (_, i) => (
        <ResultLoader key={i}>
          <Skeleton width={10} height={15} />
          <InfoBox>
            <Skeleton width={25} height={3} />
            <ProviderBox>
              <Skeleton width={8} height={3.6} />
              <Skeleton width={8} height={3.6} />
            </ProviderBox>
            <Skeleton width={65} height={1.8} />
            <Skeleton width={25} height={1.8} />
          </InfoBox>
        </ResultLoader>
      ))}
    </>
  );
}

const ResultLoader = styled.div`
  background-color: white;
  width: 100%;
  max-width: 80rem;
  border-radius: 1.5rem;
  padding: 2rem 4rem;
  margin: auto;
  margin-bottom: 3rem;
  box-shadow: 0 3px 0 #e3e2e2;
  display: flex;
`;

const InfoBox = styled.div`
  flex: 2;
  margin-left: 4rem;
  text-align: left;
`;

const ProviderBox = styled.div`
  display: flex;
  margin: 1.2rem 0;
  div {
    margin: 0 0.4rem;
  }
`;

export default SearchLoader;
