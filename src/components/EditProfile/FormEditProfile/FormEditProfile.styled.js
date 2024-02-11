import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  input[disabled] {
    opacity: 0.5;
    background-color: #ccc;
    border: none;
  }

  input {
    width: 100%;
    height: 49px;

    background: ${p => p.theme.colors.backgroundModal};
    opacity: 0.4;
    border: 1px solid #bedbb0;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;

    letter-spacing: -0.02em;

    color: ${p => p.theme.colors.inputColor};

    &:focus {
      opacity: 1;
      border: 1px solid #bedbb0;
    }
  }

  button[disabled] {
    opacity: 0.5;
    background-color: grey;
    border: none;
  }
  button:hover[disabled] {
    background-color: grey;
  }
  svg{
    stroke: ${p => p.theme.colors.titleModalFontColor};
    opacity: 0.4;
  }
`;
