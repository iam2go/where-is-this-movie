import TextField from "@atoms/field";
import Icon from "@atoms/icons";
import useOutsideClick from "@hooks/useOutsideClick";
import { useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";
import { useCallback, useRef, useState } from "react";
import * as S from "./Select.styled";

export type Option = {
  label: string;
  value: string;
};

type Props = {
  width: string;
  options: Option[];
  defaultValue: Option;
  onClick?: (option: Option) => void;
};

function Select({ width, options, defaultValue, onClick }: Props) {
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState<Option>(defaultValue);
  const ref = useRef(null);

  const onClickExpand = useCallback(() => {
    setExpand((prev) => !prev);
  }, []);

  const onClose = useCallback(() => {
    setExpand(false);
  }, []);

  const onClickOption = useCallback(
    (option: Option) => {
      setSelected(option);
      onClick?.(option);
      onClose();
    },
    [onClick, onClose]
  );

  const optionStyle = useSpring({
    opacity: expand ? 1 : 0,
    height: expand ? "fit-content" : 0,
  });

  const buttonStyle = useSpring({
    transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  });

  useOutsideClick(ref, onClose);

  return (
    <S.Select width={width} ref={ref}>
      <TextField>
        {selected.label}
        <S.ExpandButton onClick={onClickExpand}>
          <animated.div style={buttonStyle}>
            <Icon type="expandMore" solid />
          </animated.div>
        </S.ExpandButton>
      </TextField>
      {expand && (
        <S.OptionBox style={optionStyle}>
          {options.map(({ label, value }) => (
            <S.Option
              key={value}
              onClick={() => onClickOption({ label, value })}
            >
              {label}
            </S.Option>
          ))}
        </S.OptionBox>
      )}
    </S.Select>
  );
}

export default Select;
