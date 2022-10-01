import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { colorQuantization, RGBColor, transToRGBA } from "../../../utils/color";

type Props = {
  url: string;
};

function Background({ url }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [leftColor, setLeftColor] = useState<RGBColor | null>(null);
  const [rightColor, setRightColor] = useState<RGBColor | null>(null);

  const readImageData = useCallback(() => {
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
    let rightData = context.getImageData(width - 20, 0, 20, height).data;

    const leftAvgColor = colorQuantization(leftData);
    const rightAvgColor = colorQuantization(rightData);

    setLeftColor(leftAvgColor);
    setRightColor(rightAvgColor);
  }, []);
  return (
    <>
      <Wrap>
        <Left bgColor={leftColor} />
        <div style={{ position: "relative" }}>
          <LeftGradient bgColor={leftColor} />
          <StyledImage
            ref={imgRef}
            src={url}
            alt="poster"
            onLoad={readImageData}
            height="400px"
          />
          <RightGradient bgColor={rightColor} />
        </div>
        <Right bgColor={rightColor} />
      </Wrap>
    </>
  );
}
type styledProps = {
  bgColor: RGBColor | null;
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 50rem;
  position: relative;
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

const StyledImage = styled.img`
  height: 100%;
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
  /* background-image: linear-gradient(-90deg, rgba(73, 63, 42, 0) 0%, rgb(73, 63, 42) 100%); */
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
