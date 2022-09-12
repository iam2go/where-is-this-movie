import baseStyled, { ThemedStyledInterface } from "styled-components";

const color = {
  background: "#f3f3f3",
  point: "#f25547",
};

const common = {
  absoluteCenter: `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export const theme = {
  common,
  color,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
