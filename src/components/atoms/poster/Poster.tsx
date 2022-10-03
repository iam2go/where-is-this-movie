import styled from "styled-components";
import useProgressiveImg from "../../../hooks/useProgressiveImg";

type Props = {
  url: string | undefined;
  width?: number;
};

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL as string;
function Poster({ url, width = 18 }: Props) {
  const [src, blur] = useProgressiveImg(
    IMAGE_URL + "/w92" + url,
    IMAGE_URL + "/w185" + url
  );
  return <StyledPoster blur={blur} url={src} width={width} />;
}

type StyleProps = {
  blur: boolean;
} & Required<Props>;

const StyledPoster = styled.div<StyleProps>`
  width: ${({ width }) => width + "rem"};
  height: ${({ width }) => (width / 2) * 3 + "rem"};
  background-image: url(${({ url }) => url});
  background-size: cover;
  border-radius: 15px;
  filter: ${({ blur }) => (blur ? "blur(20px)" : "none")};
  transition: ${({ blur }) => (blur ? "none" : "filter 0.3s ease-out")};
`;

export default Poster;
