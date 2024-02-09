import styled from 'styled-components';
import Modal from 'react-modal';

export const FiltersStyled = styled.button`
    position: absolute;
    top: 0;
    right: 0;

    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: rgba(22, 22, 22, 0.8);
    display: flex;
    gap: 8px;

    svg {
        fill: transparent;
        stroke: rgba(22, 22, 22, 0.8);
    }
`;

export const ModalStyled = styled(Modal)`
    box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
    background: #fcfcfc;
    border-radius: 8px;
    padding: 24px;
    width: 300px;
    text-align: left;

    h2 {
        font-weight: 500;
        font-size: 18px;
        letter-spacing: -0.02em;
        color: #161616;
        padding-bottom: 14px;
        border-bottom: 1px solid rgba(22, 22, 22, 0.1);
    }

    h3 {
        font-weight: 500;
        font-size: 14px;
        letter-spacing: -0.02em;
        color: #161616;
        padding-block: 14px;
    }

    button {
        font-weight: 400;
        font-size: 12px;
        letter-spacing: -0.02em;
        text-decoration: underline;
        color: rgba(22, 22, 22, 0.5);
    }
`;

export const BtnClose = styled.button`
    line-height: 0;
    position: absolute;
    top: 18px;
    right: 18px;
`;

export const SublineRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const InputRow = styled.div`
    position: relative;
    //padding-left: 22px;

    label {
        display: block;
        color: rgba(22, 22, 22, 0.5);
    }

    input {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 0;
        height: 0;
        opacity: 0;

        + label {
            &:before {
                content: '';
                background: ${p => p.theme.labelGray};
                border-radius: 100%;
                border: transparent;
                display: inline-block;
                width: 14px;
                height: 14px;
                position: relative;
                top: -0.2em;
                margin-right: 8px; 
                vertical-align: middle;
                cursor: pointer;
                text-align: center;
                transition: all 250ms ease;
            }
        }
        &:checked {
            + label {
                color: #161616;

                &:before {
                    background-color: ${p => p.theme.labelGray};
                    box-shadow: inset 0 0 0 3px #fcfcfc;
                }
            }
        }

        + label {
            &:empty {
                &:before {
                    margin-right: 0;
                }
            }
        }
    }

    &:nth-of-type(3) {
        input {
            + label {
                &:before {
                    background: ${p => p.theme.labelBlue};
                }
            }
        }
    }

    &:nth-of-type(4) {
        input {
            + label {
                &:before {
                    background: ${p => p.theme.labelRosa};
                }
            }
        }
    }

    &:nth-of-type(5) {
        input {
            + label {
                &:before {
                    background: ${p => p.theme.labelGreen};
                }
            }
        }
    }
`;

export const customStyles = {
    content: {
        position: 'absolute',
        top: '50%',
        //left: '50%',
        right: '0',
        bottom: 'auto',
        //marginRight: '-50%',
        transform: 'translateY(-50%)',
    },
};