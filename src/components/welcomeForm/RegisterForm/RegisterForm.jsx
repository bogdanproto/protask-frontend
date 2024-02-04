import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Register = (ms) => new Promise((r) => setTimeout(r, ms));

const RegisterForm = () => (
  <div>
    <h1>Registration</h1>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}

      validate={(values) => {
           const errors = {};
           if (!values.name) {
             errors.fullname = "Required";
           }

           if (!values.email) {
             errors.email = "Required";
           } else if (
             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
           ) {
             errors.email = "Invalid email address";
           }
           if (!values.password) {
             errors.password = "Required";
           }
           return errors;
         }}

      onSubmit={async (values) => {
        await Register(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
        <Form>
          <Field id="name" name="name" placeholder="Enter your name" />

          <Field id="email" name="email" placeholder="Enter your email" />

          <Field  id="password"  name="password" placeholder="Create a password" type="email" />

          <button type="submit">
            Register Now
          </button>
        </Form>
      
    </Formik>
  </div>
);

ReactDOM.render(<RegisterForm />, document.getElementById('root'));