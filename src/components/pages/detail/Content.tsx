import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MovieInfo } from "../../../apis";
import BasicInfo from "./BasicInfo";
import ProviderBox from "./ProviderBox";

type Params = {
  id: string;
};

function Content() {
  const { id } = useParams() as Params;
  return (
    <ContentWrap>
      <BasicInfo id={id} />
      <ProviderBox />
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
