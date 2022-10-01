import styled from "styled-components";

type IconTypes = "search" | "delete" | "time" | "refresh";
type Props = {
  type: IconTypes;
  size?: number;
  color?: string;
  solid?: boolean;
};

type StyledProps = {
  size: number;
  color: string | undefined;
};

const iconClassName = {
  search: "fa-magnifying-glass",
  delete: "fa-circle-xmark",
  time: "fa-clock",
  refresh: "fa-arrow-rotate-right",
};

function Icon({ type, color, size = 16, solid = false }: Props) {
  return (
    <IconStyle
      className={`fa-${solid ? "solid" : "regular"} ${iconClassName[type]}`}
      color={color}
      size={size}
    ></IconStyle>
  );
}

const IconStyle = styled.i<StyledProps>`
  font-size: ${({ size }) => size}px;
  color: ${({ theme, color }) => (color ? color : theme.color.point)};
`;

export default Icon;
