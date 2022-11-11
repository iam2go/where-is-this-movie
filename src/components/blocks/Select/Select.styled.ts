import styled from "styled-components";
import {animated} from "@react-spring/web";

type StyledProps = {
    width: string;
}


const Select = styled.div<StyledProps>`
    width: ${({ width }) => width};
    position: relative;
`;

const ExpandButton = styled(animated.div)`
    float: right;
    padding-left: 0.7rem;
    cursor: pointer;
`

const OptionBox = styled(animated.div)`
    max-height: 20rem;
    background-color: white;
    position: absolute;
    width: 100%;
    height: fit-content;
    margin-top: -0.8rem;
    padding-top: 1rem;
    box-sizing: border-box;
    border-radius: 0 0 10px 10px;
    border: 1px solid #dcdcdc;
    border-top: 1px solid white;
    overflow: hidden;
    
`

const Option = styled.div`
    padding: 0.8rem 1.4rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover{
        background-color: ${({theme}) => theme.color.background};
    }
`

export {Select, ExpandButton, OptionBox, Option}