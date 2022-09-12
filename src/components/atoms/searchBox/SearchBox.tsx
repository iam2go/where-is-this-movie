import { useCallback, useState } from "react";
import styled from "styled-components";
import { useSearchMovie } from "../../../hooks/quires/useSearchMovie";

function SearchBox() {
  const [value, setValue] = useState("");
  const data = useSearchMovie(value);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  //   const onClick = useCallback(() => {
  //     refetch();
  //   }, [refetch]);

  return (
    <div>
      <SearchWrap>
        <SearchInput placeholder="search.." onChange={onChange} />
      </SearchWrap>
      <SearchButton>
        <i className="fa-solid fa-magnifying-glass"></i>
      </SearchButton>
    </div>
  );
}

const SearchWrap = styled.div`
  width: 30rem;
  height: 4rem;
  //border: 1px solid #e7e3e3;
  border-radius: 25px;
  background-color: white;
  display: inline-block;
  box-shadow: 0 3px 0 #e3e2e2;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 30rem;
  height: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 16px;
  font-family: "LeferiPoint";
`;
const SearchButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 25px;
  margin-left: 1.5rem;
  background-color: ${({ theme }) => theme.color.point};
  box-shadow: 0 3px 0 #e3e2e2;
  i {
    color: white;
  }
`;

export default SearchBox;
