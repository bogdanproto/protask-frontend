import { Formik, Field,ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { EditProfileTitle, FormWrap, StyledForm } from '../EditProfile/EditProfile.styled';
import { ProfileIcon } from 'components/EditProfile/index.js';
import { registerSchema } from 'const/index.js';

export const EditProfile = () => {
  const [values, setValues] = useState('');
  // const dispatch = useDispatch();

  useEffect(() => {
    // console.log(values);
    setValues(prevState => [...prevState, values]);
  }, []);

  const handleSubmit = (values, actions) => {
   console.log(values)
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={registerSchema}
      initialValues={{
        userName: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <div className="container">
        <FormWrap>
          <EditProfileTitle>Edit profile</EditProfileTitle>
          <ProfileIcon />
          <StyledForm autoComplete="off">
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
          </StyledForm>
        </FormWrap>
      </div>
    </Formik>
  );
};
