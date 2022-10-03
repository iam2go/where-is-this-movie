import styled from "styled-components";
import { useMovieDetail } from "../../../hooks/quires/useMovieDetail";
import Icons from "../../atoms/icons";
import Poster from "../../atoms/poster/Poster";
import Quote from "../../atoms/quote";
import Tag from "../../atoms/tag";

type Props = {
  id: string;
  children: React.ReactNode;
};

function BasicInfo({ id, children }: Props) {
  const { data } = useMovieDetail(id);
  return (
    <InfoWrap>
      <Wrap>
        <Poster url={data?.poster_path} />
        <Info>
          <Row>
            <h1>{data?.title}</h1>
            <span>({data?.release_date?.split("-")[0]})</span>
          </Row>
          <Row>
            <Icons type="time" color="#212426" />
            <span>{data?.runtime + " min"}</span>
          </Row>
          <Row>
            {data?.genres?.map(({ id, name }) => (
              <Tag key={id} text={name} />
            ))}
          </Row>
          <Line />
          {children}
        </Info>
      </Wrap>
      {data?.tagline && <Quote>{data.tagline}</Quote>}
      <Overview>
        <h2> 작품 내용</h2>
        <div className="contents">{data?.overview}</div>
      </Overview>
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 4rem;
`;

const Wrap = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  margin-bottom: 5rem;
`;

const Info = styled.div`
  width: 60rem;
  /* height: 23rem; */
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

const Line = styled.div`
  border-bottom: 1px solid #cdcdcd;
  width: 100%;
  height: 1.6rem;
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 20rem;
  .contents {
    margin-top: 2rem;
    font-size: 14px;
    letter-spacing: 0.05rem;
    line-height: 1.6;
    text-align: justify;
  }
`;
export default BasicInfo;
