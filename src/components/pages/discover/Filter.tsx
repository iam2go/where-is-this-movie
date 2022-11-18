import FilterButton from "@blocks/FilterButton/FilterButton";
import { Suspense, useCallback,  useState } from "react";

import DiscoverDialog from "@blocks/Dialog/DiscoverDialog";

function Filter() {
    const [open, setOpen] = useState(false);

    const onClick = useCallback(() => {
        setOpen(prev => !prev);
    },[]);

    const onClose = useCallback(() => {
        setOpen(false);
      }, []);

    return (  
        <div>
            {/* 임시 */}
            <FilterButton on={open} onClick={onClick}/>
            <Suspense fallback={<></>}> 
                <DiscoverDialog isOpen={open}  onClose={onClose}/>
            </Suspense>
        </div>
    );
    
}

export default Filter;