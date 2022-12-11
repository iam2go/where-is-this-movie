import FilterButton from "@blocks/FilterButton/FilterButton";
import { useCallback, useState } from "react";

import DiscoverDialog from "@blocks/Dialog/DiscoverDialog";
import styled from "styled-components";

function Filter() {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ButtonWrap>
      <FilterButton on={open} onClick={onClick} />
      {open && <DiscoverDialog isOpen={open} onClose={onClose} />}
    </ButtonWrap>
  );
}

const ButtonWrap = styled.div`
  margin-right: 0.6rem;
`;

export default Filter;
