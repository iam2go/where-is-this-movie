import styled from "styled-components";

type Props = {
  width?: number;
  height?: number;
  fullWidth?: boolean
};
function Skeleton({ width = 0, height = 0, fullWidth = false }: Props) {
  return <StyledSkeleton width={width} height={height} fullWidth={fullWidth}/>;
}

const StyledSkeleton = styled.div<Props>`
  background-color: #dcdcdc;
  border-radius: 1rem;
  width: ${({ width, fullWidth }) => fullWidth ? '100%' : (width + "rem")};
  height: ${({ height }) => height + "rem"};
  display: inline-block;
`;
export default Skeleton;
