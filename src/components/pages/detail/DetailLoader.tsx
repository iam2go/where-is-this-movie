import styled from "styled-components";
import Icons from "../../atoms/icons";
import Skeleton from "../../atoms/skeleton";

function DetailLoader() {
  return (
    <ContentWrap>
      <InfoWrap>
        <Wrap>
          <Skeleton width={16} height={20} />
          <Info>
            <Row>
              <Skeleton width={35} height={5} />
            </Row>
            <Row>
              <span style={{ margin: "0 4px -4px" }}>
                <Icons type="time" color="#212426" />
              </span>
              <Skeleton width={8} height={2.2} />
            </Row>
            <Row>
              <Skeleton width={40} height={2.5} />
            </Row>
            <Line />
            <EmptySpace />
          </Info>
        </Wrap>
      </InfoWrap>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  width: 100%;
  height: 40rem;
  max-width: 120rem;
  background-color: white;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  ${({ theme }) => theme.common.flexCenterColumn}
`;

const InfoWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 4rem;
`;

const Wrap = styled.div`
  ${({ theme }) => theme.common.flexCenter}
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
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  border-bottom: 1px solid #cdcdcd;
  width: 100%;
  height: 1.6rem;
`;

const EmptySpace = styled.div`
  width: 100%;
  height: 15rem;
`;

export default DetailLoader;
