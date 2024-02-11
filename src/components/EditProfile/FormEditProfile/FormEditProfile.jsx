import { useFormik } from 'formik';
import { editProfileSchema } from 'const/index.js';
import { StyledForm } from './FormEditProfile.styled';
import { InputBoxErr } from 'components/common';
import { updUserProfile } from 'redux/authSlice/operations';
import { useDispatch, useSelector } from 'react-redux';
import { InputPasswordFormStyle } from '../InputPasswordForm/InputPasswordForm.styled';
import { getFilledFields } from '../helpers/getFilledFields';
import { succesMsgSelectorUser } from 'redux/commonSelector';
import { useEffect } from 'react';

export const FormEditProfile = ({ closeModal }) => {
  const { userName, email } = useSelector(state => state.authUser.user);
  const isSuccessDispatch = useSelector(succesMsgSelectorUser);

  const dispatch = useDispatch();

  const handleSubmit = (_, actions) => {
    actions.resetForm();
    dispatch(updUserProfile(getFilledFields(formik.values)));
  };

  useEffect(() => {
    if (isSuccessDispatch) {
      closeModal();
    }
  }, [closeModal, isSuccessDispatch]);

  const formik = useFormik({
    initialValues: {
      userName: userName,
      email: email,
      newPassword: '',
      currentPassword: '',
    },
    onSubmit: handleSubmit,
    validationSchema: editProfileSchema,
  });

  const newPassword = formik.values.newPassword;

  return (
    <StyledForm autoComplete="off" onSubmit={formik.handleSubmit}>
      <InputBoxErr>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter new nickName ..."
          label="userName"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div>{formik.errors.userName}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <input
          type="email"
          name="email"
          label="email"
          id="email"
          placeholder="Enter new email ..."
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <InputPasswordFormStyle
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="Enter new password ..."
          label="newPassword"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
          eyeColor="#4e4e4e"
        />
        {formik.touched.newPassword && formik.errors.newPassword ? (
          <div>{formik.errors.newPassword}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <InputPasswordFormStyle
          type="text"
          id="currentPassword"
          name="currentPassword"
          placeholder="Enter current password ..."
          label="currentPassword"
          variant="outlined"
          disabled={newPassword ? false : true}
          onChange={formik.handleChange}
          value={formik.values.currentPassword}
        />
        {formik.touched.currentPassword && formik.errors.currentPassword ? (
          <div>{formik.errors.currentPassword}</div>
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
    </StyledForm>
  );
};
