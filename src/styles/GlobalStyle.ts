import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
    font-family: 'LeferiPoint';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

    html {
        font-size: 10px;
    }
    body{
        margin: 0;
        font-size: 12px;
        width: 100vw;
        height: 100vh;
    }
    button{
        cursor: pointer;
        border: none;
    }
`;

export default GlobalStyle;
