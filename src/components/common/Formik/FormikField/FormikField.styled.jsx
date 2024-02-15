import { Field } from 'formik';
import styled from 'styled-components';

export const FormikFieldStyle = styled(Field)`
  box-sizing: border-box;

  height: 49px;

  opacity: 0.4;
  border: 1px solid ${props => props.theme.colors.mainAccentColor};
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.mainFontColor};

  &:focus {
    opacity: 1;
  }
`;
