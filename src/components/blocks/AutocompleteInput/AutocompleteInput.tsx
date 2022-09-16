import { Suspense, useState } from "react";
import styled from "styled-components";
import Input from "../../atoms/input";
import Icon from "../../atoms/icons";
import useDebounce from "../../../hooks/useDebounce";
import ResultBox, { ResultBoxLoader } from "./ResultBox";

type Props = {
  width?: string;
  placeholder?: string;
};

type StyledProps = {
  width: string;
};

function AutocompleteInput({ width = "30rem", placeholder = "" }: Props) {
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
          {value ? <Icon type="delete" /> : <Icon type="search" />}
        </IconWrap>
      </InputWrap>
      <Suspense fallback={<ResultBoxLoader />}>
        {value && <ResultBox keyword={debouncedValue} />}
      </Suspense>
    </AutocompleteBox>
  );
}

const AutocompleteBox = styled.div<StyledProps>`
  width: ${({ width }) => width};
`;

const SearchWrap = styled.div`
  width: 30rem;
  height: 4rem;
  //border: 1px solid #e7e3e3;
  border-radius: 10px;
  background-color: white;
  display: inline-block;
  box-shadow: 0 3px 0 #e3e2e2;
`;

const InputWrap = styled.div`
  background-color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  box-sizing: border-box;
`;

const IconWrap = styled.span`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
`;

export default AutocompleteInput;
