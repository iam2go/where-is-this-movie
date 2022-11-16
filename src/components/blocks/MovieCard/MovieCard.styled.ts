import styled from "styled-components";

const Wrap = styled.div`
  background-color: white;
  width: 100%;
  max-width: 80rem;
  border-radius: 1.5rem;
  padding: 2rem 4rem;
  margin: auto;
  margin-bottom: 3rem;
  box-shadow: 0 3px 0 #e3e2e2;
  display: flex;
  cursor: pointer;
`;

const LoaderWrap = styled(Wrap)`
  cursor: default;
`

const InfoBox = styled.div`
  flex: 2;
  margin-left: 4rem;
  text-align: left;
  h2 {
    margin-right: 0.5rem;
    span {
      color: ${({ theme }) => theme.color.point};
    }
  }
`;

const Overview = styled.div`
  font-size: 13px;
  line-height: 1.5;
  overflow: hidden;
  word-wrap: break-word;
  white-space: normal;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  display: flexbox;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ProviderBoxLoader = styled.div`
  display: flex;
  margin: 1.2rem 0;
  div {
    margin: 0 0.4rem;
  }
`;

export {LoaderWrap, Wrap, InfoBox, Overview, ProviderBoxLoader}