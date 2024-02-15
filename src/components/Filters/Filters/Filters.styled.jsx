import styled from 'styled-components';
import Modal from 'react-modal';

export const FiltersStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(2)};
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainFontColor};

  transition: all ${p => p.theme.cubicTransition};

  .ReactModalPortal {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const ModalStyled = styled(Modal)`
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  background: ${p => p.theme.colors.modalPopupBackgroundColor};
  border-radius: 8px;
  padding: 24px;
  width: 300px;
  text-align: left;
  z-index: 1;

  h2 {
    font-weight: 500;
    font-size: 18px;
  }

  h3 {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.mainFontColor};
    padding-bottom: 14px;
  }

  h4 {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.mainFontColor};
    padding-block: 14px;
  }

  button {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    text-decoration: underline;
    color: ${p => p.theme.colors.mainFontColor};
  }
`;

export const BtnClose = styled.button`
  line-height: 0;
  position: absolute;
  top: 18px;
  right: 18px;

  svg {
    fill: ${p => p.theme.colors.mainFontColor};
  }
`;

export const SublineRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 14px;

  > h3 {
    padding: 0;
  }

  > label {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    text-decoration: underline;
    color: ${p => p.theme.colors.mainFontColor};
    opacity: 0.5;
    display: inline;
    cursor: pointer;
  }

  > input {
    display: none;
  }
`;

export const UnderLine = styled.div`
  margin-top: 14px;
  margin-bottom: 14px;
  border: 1px solid ${p => p.theme.colors.underlineColor};
`;

export const InputRow = styled.div`
  position: relative;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: block;
    color: ${p => p.theme.colors.mainFontColor};
    opacity: 0.5;
    font-size: 12px;
    letter-spacing: -0.02em;
    cursor: pointer;
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
        color: ${p => p.theme.colors.mainFontColor};
        opacity: 1;

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
          background: ${p => p.theme.labelGray};
        }
      }
    }
  }

  &:nth-of-type(4) {
    input {
      + label {
        &:before {
          background: ${p => p.theme.labelBlue};
        }
      }
    }
  }

  &:nth-of-type(5) {
    input {
      + label {
        &:before {
          background: ${p => p.theme.labelRosa};
        }
      }
    }
  }

  &:last-of-type {
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
  overlay: {
    position: 'absoltute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  content: {
    //position: 'absolute',
    //top: '50%',
    //left: '50%',
    //right: '0',
    //bottom: 'auto',
    //marginRight: '-50%',
    //transform: 'translateY(-50%)',
  },
};
