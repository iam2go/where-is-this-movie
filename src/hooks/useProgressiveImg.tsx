import { useEffect, useState } from "react";

const useProgressiveImg = (
  lowQualitySrc: string,
  highQualitySrc: string
): [string, boolean] => {
  const [src, setSrc] = useState(lowQualitySrc);
  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  return [src, src === lowQualitySrc];
};
export default useProgressiveImg;
