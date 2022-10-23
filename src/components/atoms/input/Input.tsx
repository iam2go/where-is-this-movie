import React from "react";
import styled from "styled-components";

type Props = {
  value: string;
  placeholder?: string;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
};
function Input({
  value,
  placeholder = "",
  width = "25rem",
  onChange,
  onFocus,
}: Props) {
  return (
    <InputStyle
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      width={width}
      onFocus={onFocus}
    />
  );
}

const InputStyle = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: ${({ width }) => width};
  height: 100%;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 16px;
  font-family: "LeferiPoint";
`;

export default Input;
