import { InputAuthStyled } from 'components/Auth/common/InputAuth/InputAuth.styled';
import { Button, InputBoxErr } from 'components/common';
import { needHelpSchema } from 'const/schema/needHelp/needHelpSchema';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { succesMsgSelectorData } from 'redux/commonSelector';
import { sendToHelpDesk } from 'redux/dataSlice/operations';
import styled from 'styled-components';

export const NeedHelpForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isSuccessDispatch = useSelector(succesMsgSelectorData);
  const formik = useFormik({
    initialValues: {
      email: '',
      comment: '',
    },
    validationSchema: needHelpSchema,
    onSubmit: values => {
      dispatch(sendToHelpDesk(values));
    },
  });

  useEffect(() => {
    if (isSuccessDispatch) {
      closeModal();
    }
  }, [closeModal, isSuccessDispatch]);
  return (
    <NeedFormStyled onSubmit={formik.handleSubmit}>
      <Title>Need help</Title>
      <InputBoxErr>
        <Input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email address"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <TextArea
          id="comment"
          name="comment"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
          placeholder="Comment"
        />
        {formik.touched.comment && formik.errors.comment ? (
          <div>{formik.errors.comment}</div>
        ) : null}
      </InputBoxErr>

      <Button type="submit">Send</Button>
    </NeedFormStyled>
  );
};

const Title = styled.p`
  color: ${({ theme }) => theme.colors.mainFontColor};
`;

const NeedFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: ${({ theme }) => theme.colors.backgroundModal};
  border-radius: 8px;
  button {
    margin-top: 10px;
  }
`;
const Input = styled(InputAuthStyled)`
  color: black;
  opacity: 1;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
`;
export const TextArea = styled.textarea`
  box-sizing: border-box;
  color: black;
  opacity: 1;
  width: 100%;
  height: 49px;

  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;

  letter-spacing: -0.02em;

  &:focus {
    opacity: 1;
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  }
`;
