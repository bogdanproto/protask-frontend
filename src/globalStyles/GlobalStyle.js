import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

    /* GENERAL */

    body {
        font-family: "Poppins";
        font-size: 14px;
        line-height: 1.28;
        font-weight: 400;
         }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    svg {
        width: 100%;
    }

    /* TYPOGRAPHY */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    
    }

     p {
        margin: 0;
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

    /* a:hover,
    a:focus {
        color: ${p => p.theme.colors.accentColor};
    } */


    /* BUTTONS */

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
        font-size: inherit;
        font-weight: 500;
        line-height: inherit;
        color: ${p => p.theme.colors.mainFontColor};
        transition: color ${p => p.theme.cubicTransition};
    }

    .btn.btn-plus {
        line-height: 0;
        border-radius: 6px;
        padding: 8px 10px;
        background-color: ${p => p.theme.colors.addBoardIconColor};
        color: ${p => p.theme.colors.secondFontColor};
        transition: background-color ${p => p.theme.cubicTransition};

        &.btn-small {
            padding: 7px;
            background-color: ${p => p.theme.colors.btnSmall};

            svg {
                stroke: ${p => p.theme.colors.black};
            }
        }
    }

    .btn.btn-plus:hover {
        background-color: ${p => p.theme.colors.secondFontColor};
    }

    .btn.btn-primary {
        height: 49px;
        border-radius: 8px;
        padding: 10px;
        background-color: ${p => p.theme.colors.mainAccentColor};
        color: ${p => p.theme.colors.mainFontColor};
        transition: background-color ${p => p.theme.cubicTransition};
        }

    .btn.btn-primary:hover
    {
        background-color: ${p => p.theme.colors.secondAccentColor};
    }

    .btn.btn-secondary {
        height: 49px;
        border-radius: 8px;
        padding: 14px;
        background-color: ${p => p.theme.colors.black};
        color: ${p => p.theme.colors.white};
        transition: background-color ${p => p.theme.cubicTransition};
        min-width: 287px;
    }

    .btn.btn-secondary:hover {
        background-color: ${p => p.theme.colors.accentColorHover};
    }

    .btn.btn-logout {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        color: ${p => p.theme.colors.logoutText};

        @media (min-width: 1440px) {
            font-size: 16px;
        }

        svg {
            fill: transparent;
            stroke: ${p => p.theme.colors.logoutIcon};
            transition: stroke ${p => p.theme.cubicTransition};
        }
    }

    .btn.btn-logout:hover,
    .btn.btn-logout:focus {
         svg {
            stroke: ${p => p.theme.colors.logoutIconHover};
        }
    }


    /* FORMS */

    textarea {
        resize: none;   
        min-height: 120px;
    }

    input, textarea {
        padding: 14px 18px;
        border-radius: 8px;
        
    } 

    input:focus,
    textarea:focus {
            outline: none;
    }

    /* label {
       display: none;
    } */
    

`;
