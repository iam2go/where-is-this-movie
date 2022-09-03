import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;
    }
    body{
        margin: 0;
        font-size: 12px;
        width: 100vw;
        height: 100vh;
    }
`;

export default GlobalStyle;
