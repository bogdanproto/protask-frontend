import { useFormik } from 'formik';
import { useState } from 'react';
import { editProfileSchema } from 'const/index.js';
import { StyledForm } from './FormEditProfile.styled';
import { InputBoxErr } from 'components/common';
import { useDispatch, useSelector } from 'react-redux';
import { updUserProfile } from 'redux/authSlice/operations';

export const FormEditProfile = ({...props}) => {
  const { userName, email } = useSelector(state => state.authUser.user);
  const [inputState, setInputState] = useState({userName,email});

  const [dddd, setDdd] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    // dispatch(updUserProfile({userName,email})) //передаю в стейт
    console.log(inputState);
    console.log(dddd);
    // props.closeModal();  //дописати якусь нотифікашку, що дані змінено
  };

 

  const handleChange = event => {
    
    const { name, value } = event.target;
    setInputState({ name, value });
    setDdd(prevState => ({
      ...prevState,
      [name]: value,
    }));
    console.log("event.target.name ----", event.target.name)
    // setDdd({userName,value});
    console.log("{ name, value } = event.target ----", {name, value})
    console.log("dddd ---", dddd)
    console.log("inputState ---", inputState);
  };

  

  const formik = useFormik({
    initialValues: {
      userName: userName,
      email: email,
      newPassword: '',
      currentPassword: '',
    },
    onSubmit: handleSubmit,
    validationSchema: editProfileSchema,
  });

  return (
    <StyledForm autoComplete="off" onSubmit={formik.handleSubmit}>
      <InputBoxErr>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter new nickName ..."
          label="userName"
          variant="outlined"
          onChange={handleChange}
          value={formik.values.userName}
          
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div>{formik.errors.userName}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <input
          type="email"
          name="email"
          label="email"
          id="email"
          placeholder="Enter new email ..."
          onChange={handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
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
          value={inputState.newPassword ? inputState.newPassword : ''}
        />
        {formik.touched.newPassword && formik.errors.newPassword ? (
          <div>{formik.errors.newPassword}</div>
        ) : null}
      </InputBoxErr>

      <InputBoxErr>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="Enter current password ..."
          label="currentPassword"
          variant="outlined"
          disabled={inputState.newPassword ? false : true}
          onChange={formik.handleChange}
          value={formik.values.currentPassword}
        />
        {formik.touched.currentPassword && formik.errors.currentPassword ? (
          <div>{formik.errors.currentPassword}</div>
        ) : null}
      </InputBoxErr>

      <button className="btn btn-primary" variant="contained" type="submit">
        Send
      </button>
    </StyledForm>
  );
};
