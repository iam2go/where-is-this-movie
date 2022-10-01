import styled from "styled-components";

type Props = {
  width: number;
  height?: number;
};
function Skeleton({ width, height }: Props) {
  return <StyledSkeleton width={width} height={height} />;
}

const StyledSkeleton = styled.div<Props>`
  background-color: #dcdcdc;
  border-radius: 1rem;
  width: ${({ width }) => width + "rem"};
  height: ${({ height }) => height + "rem"};
  display: inline-block;
`;
export default Skeleton;
