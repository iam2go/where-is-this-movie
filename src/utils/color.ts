export type RGBColor = {
  r: number;
  g: number;
  b: number;
};

const getRGBValues = (pixels: Uint8ClampedArray) => {
  let RGBList = [];
  for (let i = 0; i < pixels.length; i += 4) {
    const rgb = {
      r: pixels[i],
      g: pixels[i + 1],
      b: pixels[i + 2],
    };
    RGBList.push(rgb);
  }
  return RGBList;
};

export const transToRGBA = ({ r, g, b }: RGBColor, a: number) =>
  `rgba(${r}, ${g}, ${b}, ${a})`;
export const colorQuantization = (pixels: Uint8ClampedArray): RGBColor => {
  const rgbList = getRGBValues(pixels);
  const len = rgbList.length;

  const avgColor = rgbList.reduce(
    (color, { r, g, b }) => {
      color.r += r;
      color.g += g;
      color.b += b;
      return color;
    },
    { r: 0, g: 0, b: 0 }
  );

  avgColor.r = Math.round(avgColor.r / len);
  avgColor.g = Math.round(avgColor.g / len);
  avgColor.b = Math.round(avgColor.b / len);

  return avgColor;
};
