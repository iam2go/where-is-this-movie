import styled from "styled-components";
import { useMovieDetail } from "../../../hooks/quires/useMovieDetail";
import Icons from "../../atoms/icons";
import Tag from "../../atoms/tag";

type Props = {
  id: string;
};

type StyleProps = {
  url: string;
};

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL as string;

function BasicInfo({ id }: Props) {
  const { data } = useMovieDetail(id);
  return (
    <Wrap>
      <Poster url={IMAGE_URL + data?.poster_path} />
      <Info>
        <Row>
          <Title>{data?.title}</Title>
          <span>({data?.release_date.split("-")[0]})</span>
        </Row>
        <Row>
          <Icons type="time" color="#212426" />
          <span>{data?.runtime + " min"}</span>
        </Row>
        <Row>
          {data?.genres.map(({ id, name }) => (
            <Tag key={id} text={name} />
          ))}
        </Row>
      </Info>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 30rem;
  ${({ theme }) => theme.common.flexCenter}
`;

const Poster = styled.div<StyleProps>`
  width: 16rem;
  height: 23rem;
  background-image: url(${({ url }) => url});
  background-size: cover;
  border-radius: 15px;
`;

const Info = styled.div`
  width: 45rem;
  height: 23rem;
  margin-left: 4rem;
  font-family: "LeferiPoint";
  font-size: 14px;
  span {
    margin-left: 0.5rem;
  }
`;

const Row = styled.div`
  margin: 0.6rem 0;
`;

const Title = styled.h1`
  font-family: "LeferiPoint-bold";
  margin: 0;
  display: inline-block;
`;

export default BasicInfo;
