import { Button } from "@atoms/button";
import DiscoverButton from "@blocks/DiscoverButton";
import {
  PlatformsOption,
  GenresOption,
  RegionsOption,
} from "@blocks/SearchOption/SearchOption";
import { useDiscoverMovie } from "@hooks/quires/useDiscoverMovie";
import { useMemo } from "react";
import { useCallback, useState } from "react";
import styled from "styled-components";
import Dialog from "./Dialog";

/* 파일 위치 고민중......... */

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export type Filter = {
  platforms: number[];
  genre: number[];
  region: string[];
};

const filter_init = {
  platforms: [],
  genre: [],
  region: [],
};

function DiscoverDialog({ onClose }: Props) {
  const [filter, setFilter] = useState<Filter>(filter_init);

  const { refetch } = useDiscoverMovie({
    with_watch_providers: filter.platforms,
    with_genres: filter.genre,
    with_original_language: filter.region,
    page: 1,
  });

  const onChange = useCallback(
    (type: keyof Filter, target: number | string, active: boolean) => {
      if (active) {
        setFilter((prev) => ({ ...prev, [type]: [...prev[type], target] }));
        return;
      }
      setFilter((prev) => ({
        ...prev,
        [type]: (prev[type] as Array<string | number>).filter(
          (item) => item !== target
        ),
      }));
    },
    []
  );

  const onClickDiscover = useCallback(() => {
    onClose();
    refetch();
  }, [onClose, refetch]);

  const optionCount = useMemo(
    () =>
      (Object.keys(filter) as Array<keyof Filter>).reduce(
        (count, option) => filter[option].length + count,
        0
      ),
    [filter]
  );

  return (
    <Dialog
      onClose={onClose}
      Buttons={<DiscoverButton onClick={onClickDiscover} count={optionCount} />}
    >
      <Wrap>
        <PlatformsOption onClick={onChange} />
        <GenresOption onClick={onChange} />
        <RegionsOption onClick={onChange} />
      </Wrap>
    </Dialog>
  );
}

const Wrap = styled.div`
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  /* padding: 0 2rem; */
  /* overflow-y: scroll; */
  /* margin-right: 3rem; */
`;

const Text = styled.div``;

export default DiscoverDialog;
