import FilterButton from "@blocks/FilterButton/FilterButton";
import Portal from "@blocks/Portal";
import SearchOption from "@blocks/SearchOption";
import useOutsideClick from "@hooks/useOutsideClick";
import { animated, useTransition } from "@react-spring/web";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Filter() {
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

    const optionTransitions = useTransition(open, {
        from: {
          transform: 'rotateX(90deg)',
          opacity: 0
        },
        enter: {
          transform: 'rotateX(0deg)',
          opacity: 1
        },
        leave: {
          transform: 'rotateX(90deg)',
          opacity: 0
        },
    });

    useOutsideClick(filterRef, onClose);

    useEffect(() => {
        if (!buttonRef.current || !open) {
          return;
        }
    
        const { left, bottom} = buttonRef.current.getBoundingClientRect();
    
        const childPosition = {
          left,
          top: bottom - 8
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
        <div>
            <FilterButton on={open} onClick={onClick} ref={buttonRef}/>
            {optionTransitions((style, item) => item && (
                <Portal>
                    <AnimatedWrapper style={{...optionPosition, ...style}} ref={filterRef}>
                        <Suspense fallback={<></>}>
                            <SearchOption onClose={onClose}/>
                        </Suspense>
                    </AnimatedWrapper>
                </Portal>
            ))}
        </div>
    );
    
}const FilterOption = styled.div`
position: absolute;
transform-origin: top left;
`

const AnimatedWrapper = animated(FilterOption);

export default Filter;