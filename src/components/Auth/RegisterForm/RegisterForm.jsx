import React from 'react';
import { useFormik } from 'formik';
import { FormAuthStyled } from '../common/Form/FormAuth.styled';
import { InputAuth } from '../common/InputAuth/InputAuth';
import { ButtonAuth } from '../common/ButtonAuth/ButtonAuth';
import { InputBoxErr } from 'components/common';
import { registerSchema } from 'const';
import { InputPassword } from '../common/InputPassword/InputPassword';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/authSlice/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,

    onSubmit: values => {
      dispatch(signUpUser(values));
    },
  });

  return (
    <FormAuthStyled onSubmit={formik.handleSubmit}>
      <InputBoxErr>
        <InputAuth
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
          placeholder="Enter your name"
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div>{formik.errors.userName}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <InputAuth
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter your email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <InputPassword
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Create a password"
          eyeColor = "rgba(255, 255, 255, 0.3)"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </InputBoxErr>

      <ButtonAuth type="submit">Register Now</ButtonAuth>
    </FormAuthStyled>
  );
};
