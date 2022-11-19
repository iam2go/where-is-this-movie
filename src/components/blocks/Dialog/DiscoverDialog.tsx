import DiscoverButton from "@blocks/DiscoverButton";
import {
  PlatformsOption,
  GenresOption,
  RegionsOption,
} from "@blocks/SearchOption/SearchOption";
import { useDiscoverMovie } from "@hooks/quires/useDiscoverMovie";
import { useMemo, useCallback } from "react";
import { useRecoilState } from "recoil";
import { discoverOptionState } from "@recoil/discover";
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

function DiscoverDialog({ onClose }: Props) {
  //   const [filter, setFilter] = useState<Filter>(filter_init);
  const [filter, setFilter] = useRecoilState(discoverOptionState);

  const { refetch } = useDiscoverMovie();

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
    [setFilter]
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
        <PlatformsOption onClick={onChange} data={filter.platforms} />
        <GenresOption onClick={onChange} data={filter.genre} />
        <RegionsOption onClick={onChange} data={filter.region} />
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
