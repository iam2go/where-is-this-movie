import styled from "styled-components";

type Props = {
  url: string | undefined;
  width?: number;
};

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL as string;
function Poster({ url, width = 18 }: Props) {
  return <StyledPoster url={IMAGE_URL + url} width={width} />;
}

const StyledPoster = styled.div<Required<Props>>`
  width: ${({ width }) => width + "rem"};
  height: ${({ width }) => (width / 2) * 3 + "rem"};
  background-image: url(${({ url }) => url});
  background-size: cover;
  border-radius: 15px;
`;

export default Poster;
