import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';

const schema = object({
  nickName: string().min(3, 'Too Short!').max(20, 'Too Long!'),
  email: string().email(),
  password: string().min(6),
});

const EditProfile = () => {
  const [values, setValues] = useState('');
  // const dispatch = useDispatch();

  const { userName } = useSelector(state => state.authUser.user);
  // console.log('userInfo: ', userInfoFromBack.userName);

  const userInfo = { ...userName, ...values };
  // console.log("userInfo::::::",userInfo)
  console.log('values', values);
  console.log('userInfo.userName:::', userInfo.userName);

  const handleSubmit = (values, actions) => {
    setValues(values);
    actions.resetForm();
  };

  const handleChange = (e, formik) => {
    const fieldName = e.target.name;
    console.log(`Field ${fieldName} changed to ${formik.values[fieldName]}`);
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        userName: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Field
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter new nickName ..."
          label="userName"
          variant="outlined"
          onChange={e => {
            // formik.handleChange(e);
            // handleChange(e, formik);
          }}
        />
        {/* {formik.touched.name && formik.errors.name ? ( */}
        {/* <div className="FormikErr">{formik.errors.name}</div> */}
        {/* ) : null} */}
        <ErrorMessage name="nickName" />
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
          type="text"
          id="password"
          name="password"
          placeholder="Enter new password ..."
          label="password"
          variant="outlined"
          // onChange={handleChange}
          // value={formik.values.name}
        />
        <ErrorMessage name="password" />
        <button variant="contained" type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default EditProfile;
