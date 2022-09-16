import styled from "styled-components";
import { useSearchMovie } from "../../../hooks/quires/useSearchMovie";

type Props = {
  keyword: string;
};

function ResultBox({ keyword }: Props) {
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
          <ResultItem key={index}>
            {highlightKeyword(info.title, keyword)}
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
  height: fit-content;
  padding: 3rem;
  margin-top: -0.8rem;
  box-sizing: border-box;
  border-radius: 0 0 10px 10px;
  padding: 1rem 1.5rem 2rem;
`;

const ResultItem = styled.div`
  font-size: 1.4rem;
  padding: 1.2rem 0;
  font-family: "LeferiPoint";
  span {
    color: ${({ theme }) => theme.color.point};
  }
`;

export default ResultBox;
