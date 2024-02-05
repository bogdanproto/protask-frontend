import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
     .min(5, 'Too Short!')
     .max(12, 'Too Long!')
     .required('Required'),
});
 
const initialValues = {
  name: '',
  email: '',
  password: '',
}


export const RegisterForm = () => {

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm()
  }
  return (
    <div>
      <h1>Registration</h1>
      <Formik
      initialValues={initialValues} 
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}>
        <Form>
          <Field id="name" name="name" placeholder="Enter your name" />
          <ErrorMessage component="div" name="name" />
          <Field id="email" name="email" placeholder="Enter your email" />
          <ErrorMessage component="div" name="email" />
          <Field id="password" name="password" placeholder="Create a password" type="email" />
<ErrorMessage component="div" name="password" />
          <button type="submit">
            Register Now
          </button>
        </Form>
      
      </Formik>
    </div>
  );
}

ReactDOM.render(<RegisterForm />, document.getElementById('root'));



