import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BigLogo } from "../../atoms/logo";
import AutocompleteInput from "../../blocks/AutocompleteInput";

function Main() {
  const navigate = useNavigate();
  const onClickResult = (movieID: number) => {
    navigate(`/detail/${movieID}`);
  };
  const onClickMore = (keyword: string) => {
    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <Wrap>
      <BigLogo />
      <AutocompleteInput
        onClickResult={onClickResult}
        onClickMore={onClickMore}
        placeholder="찾을 영화 제목을 입력해보세요"
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120rem;
  ${({ theme }) => theme.common.absoluteCenter}
  ${({ theme }) => theme.common.flexCenterColumn}
`;

export default Main;
