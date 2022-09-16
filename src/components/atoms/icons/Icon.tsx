import styled from "styled-components";

type IconTypes = "search" | "delete";
type Props = {
  type: IconTypes;
  size?: number;
  color?: string;
};

type StyledProps = {
  size: number;
  color: string | undefined;
};

const iconClassName = {
  search: "fa-magnifying-glass",
  delete: "fa-circle-xmark",
};

function Icon({ type, color, size = 16 }: Props) {
  return (
    <IconStyle
      className={`fa-solid ${iconClassName[type]}`}
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
