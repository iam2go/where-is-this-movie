import React, { ReactNode } from "react";
import styled from "styled-components";

type Prop = {
  placeholder?: string;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
};
function Input({
  placeholder = "",
  width = "30rem",
  onChange,
  children,
}: Prop) {
  return (
    <SearchWrap>
      <SearchInput
        placeholder={placeholder}
        onChange={onChange}
        width={width}
      />
      {children}
    </SearchWrap>
  );
}

const SearchWrap = styled.div`
  width: 30rem;
  height: 4rem;
  //border: 1px solid #e7e3e3;
  border-radius: 10px;
  background-color: white;
  display: inline-block;
  box-shadow: 0 3px 0 #e3e2e2;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: ${({ width }) => width};
  height: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 16px;
  font-family: "LeferiPoint";
`;

export default Input;
