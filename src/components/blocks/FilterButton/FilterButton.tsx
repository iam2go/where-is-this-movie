import { Button } from "@atoms/button";
import Icons from "@atoms/icons";
import Portal from "@blocks/Portal";
import useOutsideClick from "@hooks/useOutsideClick";
import { animated, useTransition } from "@react-spring/web";
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

      const iconTransitions = useTransition(open, {
        initial: {
          transform: 'scale(1) rotate(0deg)',
          opacity: 1,
        },
        from: {
          transform: 'scale(0) rotate(-180deg)',
          opacity: 0,
        },
        enter: {
          transform: 'scale(1) rotate(0deg)',
          opacity: 1,
        },
        leave: {
          transform: 'scale(0) rotate(180deg)',
          opacity: 0,
        },
    
        reverse: true,
      });

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
    
    return ( 
      <div>
        <div ref={buttonRef} >
            <Button onClick={onClick} gray={open} width={1.0} height={1.4}>
              {iconTransitions((style, item) => item ? (
                <Positioner>
                  <animated.div style={style}>
                    <Icons type= "close" color="white" solid/>
                  </animated.div>
                 </Positioner>
                ) : (
                <Positioner>
                  <animated.div style={style}>
                    <Icons type= "filter" color="white" solid/>
                  </animated.div>
                </Positioner>
              ))}
              
            </Button>
        </div> 
        {optionTransitions((style, item) => item && (
          <Portal>
            <AnimatedWrapper style={{...optionPosition, ...style}} ref={filterRef}>
              {children}
            </AnimatedWrapper>
      </Portal>
        ))}
        {/* {open && ( 
          <Portal>
            <AnimatedWrapper style={{optionPosition, ...style}} ref={filterRef}>
              {children}
            </AnimatedWrapper>
        </Portal>
        )} */}
      </div>
    );
}

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FilterOption = styled.div`
    position: absolute;
    transform-origin: top left;
`

const AnimatedWrapper = animated(FilterOption);

export default FilterButton;
