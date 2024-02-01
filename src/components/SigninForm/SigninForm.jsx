import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSigninForm } from 'utils/shema';
import { useDispatch } from 'react-redux';
import { signInUser } from 'redux/userAuth/operations';
import { FormStyled } from 'components/LoginForm/LoginForm.styled';

export const SigninForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSigninForm),
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(signInUser(data));
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register('name')} placeholder="Enter Your Full Name" />
        <p>{errors.name?.message}</p>
      </label>
      <label>
        <input {...register('email')} placeholder="Enter Your Email" />
        <p>{errors.email?.message}</p>
      </label>
      <label>
        <input
          {...register('password')}
          type="password"
          placeholder="Enter Your Password"
        />
        <p>{errors.password?.message}</p>
      </label>
      <button type="submit">Signup</button>
    </FormStyled>
  );
};
