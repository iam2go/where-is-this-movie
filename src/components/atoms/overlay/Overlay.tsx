import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};
function Overlay({ children }: Props) {
  return <OverlayWrap>{children}</OverlayWrap>;
}

const OverlayWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export default Overlay;
