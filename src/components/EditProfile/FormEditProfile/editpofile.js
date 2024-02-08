import { Formik, Field, ErrorMessage, Form } from 'formik';
import { useEffect, useState } from 'react';

import { registerSchema } from 'const/index.js';
import { FormWrap } from './FormEditProfile.styled';

export const FormEditProfile = () => {
  const [values, setValues] = useState('');
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // console.log(values);
  //   setValues(prevState => [...prevState, values]);
  // }, []);

  const handleSubmit = (values, actions) => {
    console.log(values);
    // actions.resetForm();
  };

  return (
    <Formik
      validationSchema={registerSchema}
      initialValues={{
        userName: '',
        email: '',
        newPassword: '',
        currentPassword: '',
      }}
      onSubmit={handleSubmit}
    >
      <div className="container">
        <FormWrap>
          <Form autoComplete="off">
            <Field
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter new nickName ..."
              label="userName"
              variant="outlined"
              // onChange={handleChange}
              // value={formik.values.name}
            />
            {/* formik.touched.name && formik.errors.name ? (
             <div className="FormikErr">{formik.errors.name}</div> 
            ) : null */}
            <ErrorMessage name="userName" />
            <Field
              type="email"
              name="email"
              label="email"
              id="email"
              placeholder="Enter new email ..."
              // onChange={formik.handleChange}
              // value={formik.values.number}
            />
            {/* {formik.touched.number && formik.errors.number ? (
            <div className="FormikErr">{formik.errors.number}</div>
          ) : null} */}
            <ErrorMessage name="email" />
            <Field
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Enter new password ..."
              label="newPassword"
              variant="outlined"
              // onChange={handleChange}
              // value={formik.values.name}
            />
            <ErrorMessage name="password" />
            <Field
              type="password"
              id="currentPassword"
              name="password"
              placeholder="Enter current password ..."
              label="password"
              variant="outlined"
              // onChange={handleChange}
              // value={formik.values.name}
            />
            <ErrorMessage name="password" />

            <button
              className="btn btn-primary"
              variant="contained"
              type="submit"
            >
              Send
            </button>
          </Form>
        </FormWrap>
      </div>
    </Formik>
  );
};



