import styled from "styled-components";
import { useSearchMovie } from "../../../hooks/quires/useSearchMovie";

type Props = {
  keyword: string;
  onClick: (id: number) => void;
};

function ResultBox({ keyword, onClick }: Props) {
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
  return (
    <ResultBoxWrap>
      {data?.length === 0 && <p>찾으시는 검색 결과가 없습니다 😥</p>}
      {data &&
        data.map((info, index) => (
          <ResultItem key={index} onClick={() => onClick(info.id as number)}>
            {highlightKeyword(info.title as string, keyword)}
            <sub>({info?.release_date?.toString().split("-")[0]})</sub>
          </ResultItem>
        ))}
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
    font-weight: bold;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.background2};
    cursor: pointer;
  }
`;

export default ResultBox;
