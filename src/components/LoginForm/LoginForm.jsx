import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLoginForm } from 'utils/shema';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/userAuth/operations';
import { FormStyled } from './LoginForm.styled';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLoginForm),
  });
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(logInUser(data));
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
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
      <button type="submit">Login</button>
    </FormStyled>
  );
};
