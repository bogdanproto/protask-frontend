
import { useDispatch } from 'react-redux';
import handleSubmit from 'helpers/AuthPage/LoginForm.jsx';
import { Form, Input, Label, Button } from './LoginForm.styled';
// import { logIn } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  
  const dispatch = useDispatch();

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
       
        <Input
          type="email"
          name="email"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          placeholder="Enter your email"
        />
      </Label>
      <Label>
       
        <Input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          required
          placeholder="Enter your password"
        />
      </Label>
      <Button type="submit">Log In Now</Button>
      
    </Form>
  );
};

export default LoginForm;