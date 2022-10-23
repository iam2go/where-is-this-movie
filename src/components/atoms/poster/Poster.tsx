import styled from "styled-components";
import useProgressiveImg from "../../../hooks/useProgressiveImg";
import Icons from "../icons";

type Props = {
  url: string | undefined;
  width?: number;
};

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL as string;
function Poster({ url, width = 18 }: Props) {
  const lowImageUrl = url ? IMAGE_URL + "/w92" + url : "";
  const highImageUrl = url ? IMAGE_URL + "/w185" + url : "";
  const [src, blur] = useProgressiveImg(lowImageUrl, highImageUrl);

  return url ? (
    <StyledPoster blur={blur} url={src} width={width} />
  ) : (
    <EmptyImage width={width}>
      <Icons type="image" color={"rgba(255, 255, 255, 0.5)"} size={25} />
    </EmptyImage>
  );
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

const EmptyImage = styled.div<Required<Pick<Props, "width">>>`
  width: ${({ width }) => width + "rem"};
  height: ${({ width }) => (width / 2) * 3 + "rem"};
  background-color: #cdcdcd;
  border-radius: 15px;
  position: relative;
  i {
    ${({ theme }) => theme.common.absoluteCenter}
  }
`;

export default Poster;
