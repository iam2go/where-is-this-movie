import styled from "styled-components";
import { useSearchMovie } from "../../../hooks/quires/useSearchMovie";
import { HighlightWord } from "../../atoms/text";

type Props = {
  keyword: string;
  onClick: (id: number) => void;
  onClickMore: (keyword: string) => void;
};

function ResultBox({ keyword, onClick, onClickMore }: Props) {
  const { data } = useSearchMovie(keyword);
  const highlightKeyword = (text: string, keyword: string) => {
    if (!text) {
      return;
    }
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));
    return parts.map((part, index) =>
      index % 2 === 1 ? <span key={index}>{part}</span> : part
    );
  };

  const handleClickMore = () => {
    onClickMore(keyword);
  };

  return (
    <ResultBoxWrap>
      {data?.length === 0 && <p>찾으시는 검색 결과가 없습니다 😥</p>}
      {data &&
        data.map((info, index) => (
          <ResultItem key={index} onClick={() => onClick(info.id as number)}>
            <HighlightWord text={info.title as string} keyword={keyword} />
            <sub>({info?.release_date?.toString().split("-")[0]})</sub>
          </ResultItem>
        ))}
      {data?.length !== 0 && (
        <ShowMore onClick={handleClickMore}>show more...</ShowMore>
      )}
    </ResultBoxWrap>
  );
}

export function ResultBoxLoader() {
  return (
    <ResultBoxWrap>
      <p>Loading...</p>
    </ResultBoxWrap>
  );
}

const ResultBoxWrap = styled.div`
  background-color: white;
  width: 100%;
  height: fit-content;
  padding: 3rem;
  margin-top: -0.8rem;
  box-sizing: border-box;
  border-radius: 0 0 10px 10px;
  padding: 1rem 0;
  position: absolute;
  font-family: "LeferiPoint";
  p {
    text-align: center;
    color: #212426;
  }
`;

const ResultItem = styled.div`
  font-size: 1.4rem;
  padding: 1.2rem 1.5rem;

  span {
    color: ${({ theme }) => theme.color.point};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.background2};
    cursor: pointer;
  }
`;

const ShowMore = styled.div`
  text-align: center;
  padding: 1rem 0 0.9rem;
  font-size: 13px;
  cursor: pointer;
  span {
    color: ${({ theme }) => theme.color.point};
  }
`;

export default ResultBox;
