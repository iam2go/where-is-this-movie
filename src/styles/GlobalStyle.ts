import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'LeferiPoint-bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-SpecialItalicA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }

    @font-face {
    font-family: 'LeferiPoint';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }

    html {
        font-size: 10px;
    }
    body{
        margin: 0;
        font-size: 12px;
        width: 99vw;
        height: 100vh;
        background-color: #efefef;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
    }

    h1, h2{
        font-family: "LeferiPoint-bold";
         margin: 0;
        display: inline-block;
    }
    h3{
        margin: 1rem 0 0;
        display: inline-block;
        font-weight: 400;
    }
    div{
        font-family: "LeferiPoint";
    }
    sub{
    vertical-align: baseline;
    padding-left: 0.1rem;
    color: #676767;
    }
`;

export default GlobalStyle;
