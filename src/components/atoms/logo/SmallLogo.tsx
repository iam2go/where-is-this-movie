import React from "react";
import styled from "styled-components";

function SmallLogo() {
  return (
    <Logo>
      <img
        src={require("../../../assets/WTM_logo_s.png")}
        alt="logo"
        height="40px"
      />
    </Logo>
  );
}

const Logo = styled.div`
  font-family: "Shadows Into Light", cursive;
  font-size: 60px;
`;
export default SmallLogo;
