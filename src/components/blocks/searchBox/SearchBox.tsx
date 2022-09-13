import { Suspense, useCallback, useState } from "react";
import { useSearchMovie } from "../../../hooks/quires/useSearchMovie";
import useDebounce from "../../../hooks/useDebounce";
import Icon from "../../atoms/icons";
import Input from "../../atoms/input";
import styled from "styled-components";

type Response = {
  [key: string]: string;
};

function SearchBox() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 500);
  const { data } = useSearchMovie(debouncedValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <Input onChange={onChange} width="26.5rem">
        <Icon type="search" />
      </Input>
      <Suspense fallback={<></>}>
        {data && (
          <ResultBox>
            {data.map((info: Response, index: number) => (
              <ResultItem key={index}>{info.title}</ResultItem>
            ))}
          </ResultBox>
        )}
      </Suspense>
    </>
  );
}

const ResultBox = styled.div`
  background-color: white;
  width: 24rem;
  height: fit-content;
  padding: 3rem;
  margin-top: -1.1rem;
  border-radius: 0 0 10px 10px;
`;

const ResultItem = styled.div`
  font-size: 1.4rem;
  margin: 2rem 1rem 0;
  font-family: "LeferiPoint";
`;

export default SearchBox;
