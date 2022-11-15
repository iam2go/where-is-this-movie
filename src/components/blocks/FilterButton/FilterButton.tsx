import { Button } from "@atoms/button";
import Icons from "@atoms/icons";
import { animated, useTransition } from "@react-spring/web";
import { forwardRef } from "react";
import styled from "styled-components";

type Props = {
    on: boolean;
    onClick: () => void;
};


function FilterButton({on, onClick}: Props, ref: React.ForwardedRef<HTMLDivElement>) {

      const iconTransitions = useTransition(on, {
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

    
    return ( 
        <div ref={ref} >
            <Button onClick={onClick} gray={on} width={1.0} height={1.4}>
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
    );
}

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export default forwardRef<HTMLDivElement, Props>(FilterButton);
