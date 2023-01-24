import { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useSearchMovie } from "@hooks/quires/useSearchMovie";
import { HighlightWord } from "@atoms/text";

type Props = {
  keyword: string;
  onClick: (id: number, backDrop: string) => void;
  onClickMore: (keyword: string) => void;
};

function ResultBox({ keyword, onClick, onClickMore }: Props) {
  const { data } = useSearchMovie(keyword);
  const [selected, setSelected] = useState(-1);

  const handleClickMore = useCallback(() => {
    onClickMore(keyword);
  }, [keyword, onClickMore]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (!data || data.length === 0) return;

      if (e.code === "Enter") {
        if (selected === data.length) {
          handleClickMore();
        } else {
          onClick(data[selected].id, data[selected].backdrop_path);
        }
      }
      if (e.key === "ArrowUp") {
        setSelected((prev) => (prev > 0 ? prev - 1 : -1));
        return;
      }
      if (e.key === "ArrowDown") {
        setSelected((prev) => (prev <= data!.length ? prev + 1 : -1));
      }
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [data, handleClickMore, onClick, selected]);
  return keyword ? (
    <ResultBoxWrap>
      {data?.length === 0 && <p>찾으시는 검색 결과가 없습니다 😥</p>}
      {data &&
        data.map((info, index) => (
          <ResultItem
            key={index}
            onMouseEnter={() => setSelected(-1)}
            onClick={() => onClick(info.id as number, info.backdrop_path)}
            active={selected === index}
            tabIndex={0}
          >
            <HighlightWord text={info.title as string} keyword={keyword} />
            {info?.release_date && (
              <sub>({info?.release_date?.toString().split("-")[0]})</sub>
            )}
          </ResultItem>
        ))}
      {data && data?.length !== 0 && (
        <ShowMore
          tabIndex={0}
          active={selected === data.length}
          onClick={handleClickMore}
        >
          show more...
        </ShowMore>
      )}
    </ResultBoxWrap>
  ) : null;
}

export function ResultBoxLoader() {
  return (
    <ResultBoxWrap>
      <p>Loading...</p>
    </ResultBoxWrap>
  );
}

export function ResultBoxErrorBox({
  resetErrorBoundary,
}: {
  resetErrorBoundary: () => void;
}) {
  setTimeout(() => {
    resetErrorBoundary();
  }, 1000);

  return (
    <ResultBoxWrap>
      <p>
        문제가 발생했습니다. <br />
        잠시 후 다시 시도해주세요.
      </p>
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

type StyledProps = {
  active: boolean;
};
const ResultItem = styled.div<StyledProps>`
  font-size: 1.4rem;
  padding: 1.2rem 1.5rem;

  span {
    color: ${({ theme }) => theme.color.point};
  }
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.color.background2};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.color.background2};
    cursor: pointer;
  }
`;

const ShowMore = styled.div<StyledProps>`
  text-align: center;
  padding: 1rem 0 0.9rem;
  font-size: 13px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.color.point};
    `}
  &:hover {
    color: ${({ theme }) => theme.color.point};
  }
`;

export default ResultBox;
