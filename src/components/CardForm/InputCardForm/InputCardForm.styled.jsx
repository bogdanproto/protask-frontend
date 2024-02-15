import styled from 'styled-components';

export const InputCardStyled = styled.input`
  box-sizing: border-box;

  width: 100%;
  height: 49px;

  background: ${props => props.theme.colors.modalPopupBackgroundColor};
  opacity: 0.4;
  border: 1px solid ${props => props.theme.colors.mainAccentColor};
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;

  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.mainFontColor};
  transition: all ${p => p.theme.cubicTransition};

  &:focus {
    opacity: 1;
    border: 1px solid ${props => props.theme.colors.mainAccentColor};
  }
`;

export const TextAreaCardStyled = styled.textarea`
  box-sizing: border-box;

  width: 100%;
  background: ${props => props.theme.colors.modalPopupBackgroundColor};
  opacity: 0.4;
  border: 1px solid ${props => props.theme.colors.mainAccentColor};
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;

  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.mainFontColor};
  transition: all ${p => p.theme.cubicTransition};

  &:focus {
    opacity: 1;
    border: 1px solid ${props => props.theme.colors.mainAccentColor};
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.scrollbarTrackColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.scrollbarThumbColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${p => p.theme.colors.mainAccentColor};
  }
`;
