import styled from 'styled-components';

export const RadioBtnImgWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;

  input {
    position: absolute;
    display: none;
  }

  input[type='radio']:checked + label > img {
    border: 1px solid #fff;
    box-shadow: ${({ theme }) => `0 0 3px 3px ${theme.colors.btnPrimaryHover}`};
  }

  input[type='radio'] + label > img {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    transition: 500ms all;
  }
`;

export const RadioBtnSvgWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;

  input {
    position: absolute;
    display: none;
  }

  input[type='radio']:checked + label > svg {
    color: ${({ theme }) => theme.colors.iconActiveColor};
  }

  input[type='radio'] + label > svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.colors.iconMainColor};
    border-radius: 7px;
    transition: 500ms all;
  }
`;
