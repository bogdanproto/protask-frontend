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
    color: black;
  }

  button[disabled] {
    opacity: 0.5;
    background-color: grey;
    border: none;
  }
  button:hover[disabled] {
    background-color: grey;
  }
`;
