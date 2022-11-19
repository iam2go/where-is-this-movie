import Icons from "@atoms/icons";
import Overlay from "@atoms/overlay";
import Portal from "@blocks/Portal";
import useOutsideClick from "@hooks/useOutsideClick";
import { styled } from "@styles/theme";
import React, { ReactNode, useEffect, useRef } from "react";

type Props = {
  title?: string;
  onClose: () => void;
  children: ReactNode;
  Buttons?: ReactNode;
};

function Dialog({ title, onClose, children, Buttons }: Props) {
  const dialogRef = useRef(null);
  useOutsideClick(dialogRef, onClose);

  useEffect(() => {
    const $body = document.querySelector("body") as HTMLBodyElement;
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden";
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  return (
    <Portal>
      <Overlay>
        <DialogWrap ref={dialogRef}>
          <Header>
            <h1>{title}</h1>
            <CloseButton onClick={onClose}>
              <Icons type="close" solid color="#212426" size={25} />
            </CloseButton>
          </Header>
          <Contents>{children}</Contents>
          <ButtonBox>{React.Children.toArray(Buttons)}</ButtonBox>
        </DialogWrap>
      </Overlay>
    </Portal>
  );
}

const DialogWrap = styled.div`
  ${({ theme }) => theme.common.absoluteCenter}
  ${({ theme }) => theme.common.flexCenterColumn}
  background-color: white;
  border-radius: 1.5rem;
  width: fit-content;
  height: fit-content;
  max-height: 50rem;
  min-width: 40rem;
`;

const StyledDialog = styled.div`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const Header = styled(StyledDialog)`
  padding: 2rem 3rem;
  flex: 3rem;
`;

const CloseButton = styled.div`
  margin: 0 0 1.4rem 1.4rem;
  position: absolute;
  top: 1.8rem;
  right: 2rem;
  cursor: pointer;
`;

const Contents = styled(StyledDialog)`
  padding: 0 3rem;
  flex: auto 0 content;
  height: 45rem;
  overflow-y: scroll;
`;

const ButtonBox = styled(StyledDialog)`
  padding: 2rem 3rem;
  flex: 3rem;
  display: flex;
  justify-content: center;
  & > * + * {
    margin-left: 1rem;
  }
`;

export default Dialog;
