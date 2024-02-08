import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { editProfileSchema } from 'const/index.js';
import { FormWrap, StyledForm } from './FormEditProfile.styled';
import { InputBoxErr } from 'components/common';
import { useSelector } from 'react-redux';

export const FormEditProfile = () => {
  const { userName, email } = useSelector(state => state.authUser.user);
  const [inputState, setInputState] = useState({newPassword: ''});

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

console.log(inputState)

  // const handleChange = evt => {
  //   const password = evt.target.value;
  //   setInputState(password);
  // };

  const handleChange = event => {
    const { name, value } = event.target;
    setInputState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

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
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="Enter new password ..."
          label="newPassword"
          variant="outlined"
          onChange={handleChange}
          value={inputState.newPassword? inputState.newPassword: null}
        />
        {formik.touched.newPassword && formik.errors.newPassword ? (
          <div>{formik.errors.newPassword}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="Enter current password ..."
          label="currentPassword"
          variant="outlined"
          disabled={inputState.newPassword? false: true }
          onChange={handleChange}
          value={formik.values.currentPassword}
        />
        {formik.touched.currentPassword && formik.errors.currentPassword ? (
          <div>{formik.errors.currentPassword}</div>
        ) : null}
      </InputBoxErr>

      <button className="btn btn-primary" variant="contained" type="submit">
        Send
      </button>
    </StyledForm>
  );
};
