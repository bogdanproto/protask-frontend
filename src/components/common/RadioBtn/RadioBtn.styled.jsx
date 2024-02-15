import styled from 'styled-components';

export const RadioBtnImgWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  padding-right: 28px;
  gap: 4px;

  input {
    position: absolute;
    display: none;
  }

  input[type='radio']:checked + label > img {
    border: 1px solid #fff;
    box-shadow: ${({ theme }) =>
      `0 0 3px 3px ${theme.colors.secondAccentColor}`};
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
  gap: 8px;
  color: ${p => p.theme.colors.thirdFontColor};

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  input[type='radio']:checked + label > svg {
    color: ${p => p.theme.colors.mainFontColor};
  }

  input[type='radio'] + label > svg {
    width: 18px;
    height: 18px;
    border-radius: 7px;
    transition: 500ms all;
  }
`;
