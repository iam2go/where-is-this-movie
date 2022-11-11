import { Button } from "@atoms/button";
import Icons from "@atoms/icons";
import Portal from "@blocks/Portal";
import useOutsideClick from "@hooks/useOutsideClick";
import {useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
    children: React.ReactNode
};


function FilterButton({children}:Props) {
    const [open, setOpen] = useState(false);
    const [optionPosition, setOptionPosition] = useState({});

    const filterRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);

    const onClick = useCallback(() => {
        setOpen(prev => !prev);
    },[]);

    const onClose = useCallback(() => {
        setOpen(false);
      }, []);

    useOutsideClick(filterRef, onClose);

    useEffect(() => {
        if (!buttonRef.current || !open) {
          return;
        }
    
        const { left, bottom} = buttonRef.current.getBoundingClientRect();
    
        const childPosition = {
          left,
          top: bottom
        };
    
        setOptionPosition(childPosition);
      }, [open]);

      useEffect(() => {
          window.addEventListener('resize', onClose);
          return function cleanup() {
            window.removeEventListener('resize',onClose);
          };
      }, [onClose]);
    
    return ( 
    <div >
        <div ref={buttonRef}>
            <Button onClick={onClick} >
                <Icons type= "filter" color="white" solid/>
            </Button>
        </div> 
        {open && <Portal>
            <FilterOption style={optionPosition} ref={filterRef}>
            {children}
            </FilterOption>
        </Portal>}
    </div>
    );
}

const FilterOption = styled.div`
    position: absolute;
`

export default FilterButton;
