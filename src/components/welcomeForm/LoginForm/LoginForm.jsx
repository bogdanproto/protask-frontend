import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';



const Login = (ms) => new Promise((r) => setTimeout(r, ms));

const LoginForm = () => (
  <div>
    <h1> Log In </h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}

      validate={(values) => {
           const errors = {};
           
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
        await Login(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      
        <Form>
          <Field id="email" name="email" placeholder="Enter your email" />

          <Field id="password" name="password" placeholder="Confirm a password" />

          <button type="submit"> Log In Now  </button>
        </Form>
  
    </Formik>
  </div>
);

// ReactDOM.render(<LoginForm />, document.getElementById('root'));

export default LoginForm;
