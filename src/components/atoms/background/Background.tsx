import styled from "styled-components";

type Props = {
  url: string;
};
function Background({ url }: Props) {
  return (
    <BackgroundImage url={url}>
      <Gradient />
    </BackgroundImage>
  );
}

const BackgroundImage = styled.div<Props>`
  width: 100vw;
  height: 50rem;
  background-image: url(${({ url }) => url});
  background-size: cover;
  position: relative;
  margin: 0 auto;
  z-index: -1;
`;

const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(360deg, #efefef 9%, rgba(0, 0, 0, 0) 100%);
`;

export default Background;
