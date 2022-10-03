export const CheckJongsung = (
  text: string,
  presenceString: string,
  absenceString: string
): string => {
  const lastWord = text.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, "");
  if (lastWord.length === 0) {
    return absenceString;
  }
  return (lastWord.charCodeAt(lastWord.length - 1) - 0xac00) % 28 > 0
    ? presenceString
    : absenceString;
};
