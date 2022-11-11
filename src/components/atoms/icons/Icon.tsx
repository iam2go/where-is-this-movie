import styled from "styled-components";

type IconTypes = "search" | "delete" | "close" | "time" | "refresh" | "image" | "up" | "expandMore" | "expandLess" | "filter";
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
  close: "fa-xmark",
  time: "fa-clock",
  refresh: "fa-arrow-rotate-right",
  image: "fa-image",
  up: "fa-arrow-up",
  expandMore: "fa-chevron-down",
  expandLess: "fa-chevron-up",
  filter: "fa-filter"
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
