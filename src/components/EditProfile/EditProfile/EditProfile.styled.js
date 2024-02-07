import styled from 'styled-components';
import { Form } from 'formik';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditProfileTitle = styled.h3`
  margin-bottom: 24px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
