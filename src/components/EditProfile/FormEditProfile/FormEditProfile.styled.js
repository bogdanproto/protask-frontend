import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  min-width: 232px;
  width: calc(100vw - 88px);
  max-width: 287px;
  flex-direction: column;
  box-sizing: content-box;
  padding: 4px;
  gap: 18px;
  input[disabled] {
    opacity: 0.5;
    background-color: #ccc;
    border: none;
  }

  @media (min-width: 768px) {
    min-width: 352px;
    max-width: 352px;
  }

  input {
    width: 100%;
    height: 49px;

    background: ${p => p.theme.colors.modalPopupBackgroundColor};
    opacity: 0.4;
    border: 1px solid #bedbb0;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;

    letter-spacing: -0.02em;

    color: ${p => p.theme.colors.mainFontColor};

    &:focus {
      opacity: 1;
      border: 1px solid #bedbb0;
    }
  }

  /* button {
    margin-top: 10px;
  } */

  button[disabled] {
    opacity: 0.5;
    background-color: grey;
    border: none;
  }
  button:hover[disabled] {
    background-color: grey;
  }
  svg {
    stroke: ${p => p.theme.colors.mainFontColor};
    opacity: 0.4;
  }
`;
