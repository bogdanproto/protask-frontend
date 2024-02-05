import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
     .min(5, 'Too Short!')
     .max(12, 'Too Long!')
     .required('Required'),
 });


const initialValues={
        email: '',
        password: '',
} 
      
export const LoginForm = () => {

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm()
  }

  return (
    <div>
     <h1> Log In </h1>

    <Formik 
    initialValues={initialValues} 
    onSubmit={handleSubmit}
    validationSchema={LoginSchema}>
    <Form autoComplete='off'>
          <Field id="email" name="email" placeholder="Enter your email" />
          <ErrorMessage component="div" name="email" />
          
          <Field id="password" name="password" placeholder="Confirm a password" />
          <ErrorMessage component="div" name="password" />


          <button type="submit"> Log In Now  </button>
        </Form>
  
      </Formik>
      </div>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById('root'));

