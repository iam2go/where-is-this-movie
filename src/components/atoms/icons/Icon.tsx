import styled from "styled-components";

type IconTypes = "search";
type Props = {
  type: IconTypes;
  color?: string;
};

const iconClassName = {
  search: "fa-magnifying-glass",
};

function Icon({ type, color }: Props) {
  return (
    <IconWrap color={color}>
      <i className={`fa-solid ${iconClassName[type]}`}></i>
    </IconWrap>
  );
}

const IconWrap = styled.span`
  i {
    font-size: 1.6rem;
    color: ${({ theme, color }) => (color ? color : theme.color.point)};
  }
`;

export default Icon;
