import styled from 'styled-components';

export const InputCardStyled = styled.input`
  box-sizing: border-box;

  width: 100%;
  height: 49px;

  background: #1f1f1f;
  opacity: 0.4;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;

  letter-spacing: -0.02em;

  color: #ffffff;

  &:focus {
    opacity: 1;
    border: 1px solid #bedbb0;
  }
`;

export const TextAreaCardStyled = styled.textarea`
  box-sizing: border-box;

  width: 100%;
  height: 49px;

  background: #1f1f1f;
  opacity: 0.4;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;

  letter-spacing: -0.02em;

  color: #ffffff;

  &:focus {
    opacity: 1;
    border: 1px solid #bedbb0;
  }
`;
