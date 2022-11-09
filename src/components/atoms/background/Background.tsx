import { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";
import useProgressiveImg from "@hooks/useProgressiveImg";
import { colorQuantization, RGBColor, transToRGBA } from "@utils/color";

type Props = {
  url: string;
};

const PRELOAD_IMAGE_URL = process.env.REACT_APP_IMAGE_URL + "/w300";
const IMAGE_URL = "t/p/w780";

function Background({ url }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [leftColor, setLeftColor] = useState<RGBColor | null>(null);
  const [rightColor, setRightColor] = useState<RGBColor | null>(null);
  const [src, blur] = useProgressiveImg(
    PRELOAD_IMAGE_URL + url,
    IMAGE_URL + url
  );

  const readImageData = useCallback(() => {
    if (blur) return;

    const img = imgRef.current;
    if (!img?.width) {
      return;
    }

    const { width, height } = img;
    const canvas = document.createElement("canvas");
    canvas.height = height;
    canvas.width = width;
    const context = canvas.getContext?.("2d");
    if (context === null) {
      return;
    }

    context.drawImage(img, 0, 0);
    let leftData = context.getImageData(0, 0, 20, height).data;
    let rightData = context.getImageData(width - 40, 0, 40, height);

    const leftAvgColor = colorQuantization(leftData);
    const rightAvgColor = colorQuantization(rightData.data);

    setLeftColor(leftAvgColor);
    setRightColor(rightAvgColor);
  }, [blur]);

  return (
    <Wrap blur={blur}>
      <Left bgColor={leftColor} />
      <div style={{ position: "relative" }}>
        <LeftGradient bgColor={leftColor} />
        <StyledImage
          ref={imgRef}
          blur={blur}
          src={src}
          alt="poster"
          onLoad={readImageData}
        />
        <RightGradient bgColor={rightColor} />
      </div>
      <Right bgColor={rightColor} />
    </Wrap>
  );
}
type styledProps = {
  bgColor: RGBColor | null;
};

type ImageProps = {
  blur: boolean;
};

const Wrap = styled.div<ImageProps>`
  display: flex;
  width: 100%;
  height: 40rem;
  position: relative;
  div {
    ${({ blur }) =>
      blur &&
      css`
        background: none;
      `}
  }
`;

const Left = styled.div<styledProps>`
  background-color: ${({ bgColor }) =>
    bgColor ? transToRGBA(bgColor, 1) : ""};
  flex: 1 1 0%;
`;

const Right = styled.div<styledProps>`
  background-color: ${({ bgColor }) =>
    bgColor ? transToRGBA(bgColor, 1) : ""};
  flex: 1 1 0%;
`;

const StyledImage = styled.img<ImageProps>`
  width: 71.1rem;
  height: 40rem;
  filter: ${({ blur }) => (blur ? "blur(20px)" : "none")};
  transition: ${({ blur }) => (blur ? "none" : "filter 0.3s ease-out")};
`;

const Gradient = styled.div<styledProps>`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 150px;
`;

const LeftGradient = styled(Gradient)`
  left: 0;
  background-image: ${({ bgColor }) =>
    bgColor
      ? `linear-gradient(-90deg, ${transToRGBA(bgColor, 0)} 0%, ${transToRGBA(
          bgColor,
          1
        )} 100%);`
      : ""};
`;

const RightGradient = styled(Gradient)`
  right: 0;
  background-image: ${({ bgColor }) =>
    bgColor
      ? `linear-gradient(90deg, ${transToRGBA(bgColor, 0)} 0%, ${transToRGBA(
          bgColor,
          1
        )} 100%);`
      : ""};
`;

export default Background;
