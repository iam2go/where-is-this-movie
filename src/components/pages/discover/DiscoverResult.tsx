import Select from "@blocks/Select";
import { Option } from "@blocks/Select/Select";
import { SORT_BY } from "@constants/options";
import { discoverSortState } from "@recoil/discover";
import { Suspense, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import MovieList from "./MovieList";

function DiscoverResult() {
  const setSortByValue = useSetRecoilState(discoverSortState);

  const onClickSelect = useCallback(
    (option: Option) => {
      setSortByValue(option.value);
    },
    [setSortByValue]
  );

  return (
    <ResultWrap>
      <SelectWrap>
        <Select
          width="14rem"
          options={SORT_BY}
          defaultValue={SORT_BY[0]}
          onClick={onClickSelect}
        />
      </SelectWrap>
      <Suspense fallback={<></>}>
        <MovieList />
      </Suspense>
    </ResultWrap>
  );
}

const ResultWrap = styled.div`
  width: 85rem;
`;

const SelectWrap = styled.div`
  float: right;
  height: fit-content;
  margin-bottom: 2rem;
`;

export default DiscoverResult;
