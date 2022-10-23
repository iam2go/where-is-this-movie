import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../atoms/button";
import Icons from "../../atoms/icons";

function TopButton() {
  const [show, setShow] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY < 700) {
        setShow(false);
        return;
      }
      setShow(true);
    };
    window.addEventListener("scroll", handleShowButton);
    return () => window.removeEventListener("scroll", handleShowButton);
  }, []);

  return show ? (
    <Wrap>
      <Button onClick={scrollTop}>
        <Icons type="up" color="white" solid />
      </Button>
    </Wrap>
  ) : null;
}

const Wrap = styled.div`
  position: fixed;
  right: 4rem;
  bottom: 1rem;
`;

export default TopButton;
