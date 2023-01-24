import DiscoverButton from "@blocks/DiscoverButton";
import {
  PlatformsOption,
  GenresOption,
  RegionsOption,
} from "@blocks/SearchOption/SearchOption";
import { useMemo, useCallback, Suspense, useState } from "react";
import { useRecoilState } from "recoil";
import { discoverOptionState } from "@recoil/discover";
import styled from "styled-components";
import Dialog from "./Dialog";
import { ErrorBoundary } from "react-error-boundary";

/* 파일 위치 고민중......... */

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export type Filter = {
  platforms: number[];
  genre: number[];
  region: string[];
  keyword?: string[];
};

function DiscoverDialog({ onClose }: Props) {
  //   const [filter, setFilter] = useState<Filter>(filter_init);
  const [filter, setFilter] = useRecoilState(discoverOptionState);
  const [localFilter, setLocalFilter] = useState(filter);

  const onChange = useCallback(
    (type: keyof Filter, target: number | string, active: boolean) => {
      if (active) {
        setLocalFilter((prev) => ({
          ...prev,
          [type]: [...prev[type], target],
        }));
        return;
      }
      setLocalFilter((prev) => ({
        ...prev,
        [type]: (prev[type] as Array<string | number>).filter(
          (item) => item !== target
        ),
      }));
    },
    [setLocalFilter]
  );

  const onClickDiscover = useCallback(() => {
    onClose();
    setFilter({ ...localFilter, keyword: [] });
  }, [localFilter, onClose, setFilter]);

  const optionCount = useMemo(
    () =>
      (Object.keys(localFilter) as Array<keyof Filter>).reduce(
        (count, option) =>
          option === "keyword" ? count : localFilter[option].length + count,
        0
      ),
    [localFilter]
  );

  return (
    <Dialog
      onClose={onClose}
      Buttons={<DiscoverButton onClick={onClickDiscover} count={optionCount} />}
    >
      <Wrap>
        <ErrorBoundary fallback={<></>}>
          <Suspense fallback={<></>}>
            <PlatformsOption onClick={onChange} data={localFilter.platforms} />
            <GenresOption onClick={onChange} data={localFilter.genre} />
            <RegionsOption onClick={onChange} data={localFilter.region} />
          </Suspense>
        </ErrorBoundary>
      </Wrap>
    </Dialog>
  );
}

const Wrap = styled.div`
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
`;

export default DiscoverDialog;
