import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
// import { register } from 'redux/auth/auth-operations';

import { Form, Input, Label, Button } from './RegisterForm.styled.js';

const RegisterForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      // register({
      //   name: form.elements.name.value,
      //   email: form.elements.email.value,
      //   password: form.elements.password.value,
      // })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome!`);
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter your name"
          required
        />
      </Label>
      <Label>
        <Input
          type="email"
          name="email"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Enter your email"
          required
        />
      </Label>
      <Label>
        <Input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          placeholder="Enter your password"
          required
        />
      </Label>
      <Button type="submit">Register Now</Button>
    </Form>
  );
};

export default RegisterForm;