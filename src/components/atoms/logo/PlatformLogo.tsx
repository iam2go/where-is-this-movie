import styled from "styled-components";

type Props = {
  size?: number;
  url: string;
  style?: React.CSSProperties;
};

const IMAGE_URL = (process.env.REACT_APP_IMAGE_URL + "/w45") as string;
function PlatformLogo({ url, size = 2.5, style }: Props) {
  return <Logo url={IMAGE_URL + url} size={size} style={style}></Logo>;
}

const Logo = styled.div<Props>`
  width: ${({ size }) => size + "rem"};
  height: ${({ size }) => size + "rem"};
  background-image: url(${({ url }) => url});
  background-size: cover;
  border-radius: 1.2rem;
  display: inline-block;
`;

export default PlatformLogo;
