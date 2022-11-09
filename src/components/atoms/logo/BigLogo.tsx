import React from "react";
import styled from "styled-components";

function BigLogo() {
  return (
    <Logo>
      <img
        src={require("@assets/WTM_logo.png")}
        alt="logo"
        width={"350px"}
      />
    </Logo>
  );
}

const Logo = styled.div`
  font-family: "Shadows Into Light", cursive;
  font-size: 60px;
`;
export default BigLogo;
