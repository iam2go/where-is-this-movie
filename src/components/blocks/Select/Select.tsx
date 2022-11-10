import TextField from "@atoms/field";
import Icon from "@atoms/icons";
import useOutsideClick from "@hooks/useOutsideClick";
import { useSpring} from "@react-spring/web";
import {animated} from "@react-spring/web";
import { useCallback, useRef, useState } from "react";
import * as S from './Select.styled';

type Option = {
    key: string;
    value: string;
}

type Props = {
    width: string;
    options: Option[];
}

function Select({width, options}: Props) {
    const [expand, setExpand] = useState(false);
    const [selected, setSelected] = useState('옵션 선택 요망');
    const ref = useRef(null);

    const onClickExpand = useCallback(() => {
        setExpand(prev => !prev);
    },[])

    const onClose = useCallback(() => {
        setExpand(false);
    },[]);

    const onClickOption = useCallback((value: string) => {
        setSelected(value);
        onClose();
    },[onClose]);

    const optionStyle = useSpring({
        opacity: expand ? 1 : 0,
        height: expand ? 'fit-content' : 0,
    })

    const buttonStyle = useSpring({
        transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
    });

    useOutsideClick(ref, onClose);

    return ( 
        <S.Select width={width} ref={ref}>
            <TextField>
                {selected}
                <S.ExpandButton onClick={onClickExpand}>
                    <animated.div style={buttonStyle}>
                        <Icon type="expandMore" solid />
                    </animated.div>
                </S.ExpandButton>
            </TextField>
            {/* {transitions(({...style}, expand) => expand &&
            (<S.OptionBox style={style}>
                 {options.map(({key, value}) => <S.Option key={key} onClick={() => onClickOption(value)}>{value}</S.Option>)}
             </S.OptionBox>
             ))} */}
             {expand && (
                <S.OptionBox style={optionStyle}>
                {options.map(({key, value}) => <S.Option key={key} onClick={() => onClickOption(value)}>{value}</S.Option>)}
            </S.OptionBox>
             )}
        </S.Select> 
    );
}


export default Select;