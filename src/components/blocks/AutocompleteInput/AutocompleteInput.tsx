import { Suspense, useState } from "react";
import styled from "styled-components";
import Input from "../../atoms/input";
import Icon from "../../atoms/icons";
import useDebounce from "../../../hooks/useDebounce";
import ResultBox, { ResultBoxLoader } from "./ResultBox";

type Props = {
  width?: string;
  placeholder?: string;
  onClickResult: (id: number) => void;
};

type StyledProps = {
  width: string;
};

function AutocompleteInput({
  width = "30rem",
  placeholder = "",
  onClickResult,
}: Props) {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickDelete = () => {
    setValue("");
  };

  return (
    <AutocompleteBox width={width}>
      <InputWrap>
        <Input
          value={value}
          onChange={onChange}
          width={`calc(${width} - 5rem)`}
          placeholder={placeholder}
        />
        <IconWrap onClick={onClickDelete}>
          {value ? <Icon type="delete" solid /> : <Icon type="search" solid />}
        </IconWrap>
      </InputWrap>
      <Suspense fallback={<ResultBoxLoader />}>
        {value && (
          <ResultBox keyword={debouncedValue} onClick={onClickResult} />
        )}
      </Suspense>
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
