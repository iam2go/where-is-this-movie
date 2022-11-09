import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@atoms/button";

function NotFound() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/`);
  };
  return (
    <Wrap>
      <img
        src={require("@assets/404Image.png")}
        alt="page not found"
        width={"200px"}
      />
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>
        주소를 잘못 입력하셨거나 일시적으로 사용할 수 없습니다. <br /> 주소가
        정확하다면, 잠시 후 다시 접속을 시도해주세요😭
      </p>
      <Button onClick={onClick}>홈으로 이동하기</Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  position: "absolute";
  width: 100%;
  height: 100vh;
  flex-direction: column;
  font-size: 16px;
  p {
    margin-bottom: 6rem;
  }
`;

export default NotFound;
