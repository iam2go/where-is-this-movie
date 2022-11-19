import FilterButton from "@blocks/FilterButton/FilterButton";
import { useCallback, useState } from "react";

import DiscoverDialog from "@blocks/Dialog/DiscoverDialog";

function Filter() {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <FilterButton on={open} onClick={onClick} />
      {open && <DiscoverDialog isOpen={open} onClose={onClose} />}
    </div>
  );
}

export default Filter;
