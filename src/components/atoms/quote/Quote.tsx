import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};
function Quote({ children }: Props) {
  return <TagLine>{children}</TagLine>;
}

const TagLine = styled.div`
  height: fit-content;
  text-align: center;
  font-size: 16px;
  font-style: italic;
  font-family: "Noto Serif KR", serif;
  font-weight: 200;
  color: #9f9a9a;
  &::before {
    content: "“";
    font-size: 40px;
    font-family: "Times New Roman", Times, serif;
  }
  &::after {
    content: "”";
    font-size: 40px;
    font-family: "Times New Roman", Times, serif;
  }
`;

export default Quote;
