import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

    /* GENERAL */

    body {
         font-family: "Poppins";
        font-size: 14px;
        line-height: 1.28;
        font-weight: 400;
        color: ${p => p.theme.colors.fontColor};
        background-color: ${p => p.theme.colors.background};
        margin: 0;
        letter-spacing: -0.04em;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    hr {
        border-top: 1px solid ${p => p.theme.colors.fontColor};
    }

    .container {
        width: 100%;
        max-width: 375px;
        padding-inline: 20px;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: 768px) {
            max-width: 768px;
        }

        @media (min-width: 1440px) {
            max-width: 1440px;
            padding-inline: 24px;
        }
    }

    /* TYPOGRAPHY */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0.5em;
        font-weight: 600;
        letter-spacing: -0.02em;
    }

    h1 {
        font-size: 28px;
        font-weight: 600;

        @media (min-width: 768px) {
            font-size: 40px;
        }
    }

    h2 {
        font-size: 28px;
        font-weight: 500;
    }

    p {
        margin-top: 0;
        margin-bottom: 0.5em;
        letter-spacing: -0.02em;
        line-height: 1.28;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: color ${p => p.theme.cubicTransition};
    }

    a:hover,
    a:focus {
        color: ${p => p.theme.colors.accentColor};
    }


    /* BUTTONS */

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
        font-size: inherit;
        font-weight: 500;
        color: ${p => p.theme.colors.fontColor};
        transition: color ${p => p.theme.cubicTransition};
    }

    .btn.btn-plus {
        border-radius: 6px;
        padding: 8px 10px;
        background-color: ${p => p.theme.colors.accentColor};
        color: ${p => p.theme.colors.fontColor};
        transition: background-color ${p => p.theme.cubicTransition};
    }

    .btn.btn-plus:hover,
    .btn.btn-plus:focus {
        background-color: ${p => p.theme.colors.accentColorHover};
    }

    .btn.btn-primary {
        border-radius: 8px;
        padding: 10px;
        background-color: ${p => p.theme.colors.accentColor};
        color: ${p => p.theme.colors.fontColor};
        transition: background-color ${p => p.theme.cubicTransition};
        min-width: 287px;
    }

    .btn.btn-primary:hover,
    .btn.btn-primary:focus {
        background-color: ${p => p.theme.colors.accentColorHover};
    }

    .btn.btn-secondary {
        border-radius: 8px;
        padding: 14px;
        background-color: ${p => p.theme.colors.black};
        color: ${p => p.theme.colors.white};
        transition: background-color ${p => p.theme.cubicTransition};
        min-width: 287px;
    }

    .btn.btn-secondary:hover,
    .btn.btn-secondary:focus {
        background-color: ${p => p.theme.colors.accentColorHover};
    }


    /* FORMS */

    input {
        padding: 14px 18px;
        border-radius: 8px;
        border: 1px solid ${p => p.theme.colors.accentColor};
        background-color: transparent;
        color: ${p => p.theme.colors.inputColor};
        transition: border-color ${p => p.theme.cubicTransition};
    }

    input:focus,
    textarea:focus {
        border: 1px solid ${p => p.theme.colors.accentColorHover};
        outline: none;
    }

    label {
       display: none;
    }
`;
