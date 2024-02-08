import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { registerSchema } from 'const/index.js';
import { FormWrap } from './FormEditProfile.styled';
import { InputBoxErr } from 'components/common';

export const FormEditProfile = () => {
  const [values, setValues] = useState('');
  // const dispatch = useDispatch();

  useEffect(() => {
    // console.log(values);
    setValues(prevState => [...prevState, values]);
  }, [values]);

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      newPassword: '',
      currentPassword: '',
    },
    onSubmit: handleSubmit,
    validationSchema: registerSchema,
  });

  return (
    //винести окремо

    <FormWrap autoComplete="off" onSubmit={formik.handleSubmit}>
      <InputBoxErr>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter new nickName ..."
          label="userName"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <input
          type="email"
          name="email"
          label="email"
          id="email"
          placeholder="Enter new email ..."
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="Enter new password ..."
          label="newPassword"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <input
          type="password"
          id="currentPassword"
          name="password"
          placeholder="Enter current password ..."
          label="password"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </InputBoxErr>

      <button className="btn btn-primary" variant="contained" type="submit">
        Send
      </button>
    </FormWrap>
  );
};
