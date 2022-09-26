import { Suspense } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Background from "../../atoms/background";
import Backdrop from "./Backdrop";
import BasicInfo from "./BasicInfo";
import DetailLoader from "./DetailLoader";
import ProviderBox from "./ProviderBox";

type Params = {
  id: string;
};

function Content() {
  const { id } = useParams() as Params;
  return (
    <ContentWrap>
      <Suspense fallback={<DetailLoader />}>
        <BasicInfo id={id}>
          <ProviderBox id={id} />
        </BasicInfo>
      </Suspense>
    </ContentWrap>
  );
}
const ContentWrap = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 120rem;
  background-color: white;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  ${({ theme }) => theme.common.flexCenterColumn}
`;

export default Content;
