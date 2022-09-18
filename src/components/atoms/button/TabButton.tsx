import styled from "styled-components";

type Props = {
  selected?: boolean;
  children: React.ReactNode;
};
function TabButton({ selected = false, children }: Props) {
  return <Button className="tab">{children}</Button>;
}

const Button = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.6rem 1.4rem;
  border-radius: 1rem 1rem 0 0;
  margin-right: 0.7rem;
  font-family: "LeferiPoint-bold";
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.background};
`;
export default TabButton;
