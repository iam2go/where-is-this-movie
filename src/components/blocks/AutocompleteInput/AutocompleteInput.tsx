import { Suspense, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";
import Input from "@atoms/input";
import Icon from "@atoms/icons";
import useDebounce from "@hooks/useDebounce";
import ResultBox, { ResultBoxErrorBox, ResultBoxLoader } from "./ResultBox";
import useOutsideClick from "@hooks/useOutsideClick";

type Props = {
  width?: string;
  placeholder?: string;
  onClickResult: (id: number, backDrop: string) => void;
  onClickMore: (keyword: string) => void;
};

type StyledProps = {
  width: string;
};

function AutocompleteInput({
  width = "30rem",
  placeholder = "",
  onClickResult,
  onClickMore,
}: Props) {
  const [value, setValue] = useState("");
  const [hideResult, setHideResult] = useState(false);
  const inputRef = useRef(null);
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickDelete = () => {
    setValue("");
  };

  const onFocus = () => {
    setHideResult(false);
  };

  const handleClickOutside = () => {
    setHideResult(true);
  };

  useOutsideClick(inputRef, handleClickOutside);

  return (
    <AutocompleteBox width={width} ref={inputRef}>
      <InputWrap>
        <Input
          value={value}
          onChange={onChange}
          width={`calc(${width} - 5rem)`}
          placeholder={placeholder}
          onFocus={onFocus}
        />
        <IconWrap onClick={onClickDelete}>
          {value ? <Icon type="delete" solid /> : <Icon type="search" solid />}
        </IconWrap>
      </InputWrap>
      <ErrorBoundary FallbackComponent={ResultBoxErrorBox}>
        <Suspense fallback={<ResultBoxLoader />}>
          {value && !hideResult && (
            <ResultBox
              keyword={debouncedValue}
              onClick={onClickResult}
              onClickMore={onClickMore}
            />
          )}
        </Suspense>
      </ErrorBoundary>
    </AutocompleteBox>
  );
}

const AutocompleteBox = styled.div<StyledProps>`
  width: ${({ width }) => width};
  position: relative;
`;

const InputWrap = styled.div`
  background-color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: 0 3px 0 #e3e2e2;
`;

const IconWrap = styled.span`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
`;

export default AutocompleteInput;
