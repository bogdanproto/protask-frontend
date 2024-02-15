import React from 'react';
import { useFormik } from 'formik';
import { FormAuthStyled } from '../common/Form/FormAuth.styled';
import { InputAuth } from '../common/InputAuth/InputAuth';
import { ButtonAuth } from '../common/ButtonAuth/ButtonAuth';
import { InputBoxErr } from 'components/common';
import { loginSchema } from 'const';
import { InputPassword } from '../common/InputPassword/InputPassword';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/authSlice/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,

    onSubmit: values => {
      dispatch(logInUser(values));
    },
  });

  return (
    <FormAuthStyled onSubmit={formik.handleSubmit}>
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
          placeholder="Confirm a password"
          eyeColor = "rgba(255, 255, 255, 0.3)"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </InputBoxErr>

      <ButtonAuth type="submit">Log In Now</ButtonAuth>
    </FormAuthStyled>
  );
};
