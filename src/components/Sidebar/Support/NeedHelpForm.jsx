import {
  InputCardStyled,
  TextAreaCardStyled,
} from 'components/CardForm/InputCardForm/InputCardForm.styled';
import { InputBoxErr } from 'components/common';
import { needHelpSchema } from 'const/schema/needHelp/needHelpSchema';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { succesMsgSelectorData } from 'redux/commonSelector';
import { sendToHelpDesk } from 'redux/dataSlice/operations';
import { Title, NeedFormStyled } from './NeedHelpForm.styled';

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
        <InputCardStyled
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
        <TextAreaCardStyled
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

      <button
        className="btn btn-primary"
        variant="contained"
        type="submit"
        disabled={formik.dirty ? false : true}
      >
        Send
      </button>
    </NeedFormStyled>
  );
};
