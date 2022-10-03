import React, { ReactElement } from "react";

type Props = {
  text: string;
  keyword: string;
};
function HighlightWord({ text, keyword }: Props): ReactElement {
  const highlightKeyword = (text: string, keyword: string) => {
    if (!text) {
      return;
    }
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));
    return (
      parts.map((part, index) =>
        index % 2 === 1 ? <span key={index}>{part}</span> : part
      ) || ""
    );
  };
  return <>{highlightKeyword(text, keyword)}</>;
}

export default HighlightWord;
