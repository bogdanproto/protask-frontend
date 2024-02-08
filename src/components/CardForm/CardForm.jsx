import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormAuthStyled } from 'components/Auth/common/Form/FormAuth.styled';
import { InputBoxErr } from 'components/common';
import { ButtonAuth } from 'components/Auth/common/ButtonAuth/ButtonAuth';
import { useDispatch } from 'react-redux';
import { InputCardForm } from './InputCardForm/InputCardForm';

const cardSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

export const CardForm = ({}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      priority: '',
    },
    validationSchema: cardSchema,

    onSubmit: values => {
      console.log(values);
      dispatch();
    },
  });
  return (
    <>
      <h1>Sign Up</h1>
      <FormAuthStyled onSubmit={formik.handleSubmit}>
        <InputBoxErr>
          <InputCardForm
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            placeholder="Title"
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </InputBoxErr>

        <InputBoxErr>
          <InputCardForm
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            placeholder="Description"
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </InputBoxErr>

        <InputBoxErr>
          <InputCardForm
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            placeholder="Description"
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </InputBoxErr>

        {/* <InputBoxErr>
          <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <div>
              <label>
                <input
                  type="radio"
                  name="selectedOption"
                  value="option1"
                  checked={formik.values.selectedOption === 'option1'}
                  onChange={formik.handleChange}
                />
                Option 1
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="selectedOption"
                  value="option2"
                  checked={formik.values.selectedOption === 'option2'}
                  onChange={formik.handleChange}
                />
                Option 2
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="selectedOption"
                  value="option3"
                  checked={formik.values.selectedOption === 'option3'}
                  onChange={formik.handleChange}
                />
                Option 3
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="selectedOption"
                  value="option4"
                  checked={formik.values.selectedOption === 'option4'}
                  onChange={formik.handleChange}
                />
                Option 4
              </label>
            </div>
          </div>
          {formik.touched.priority && formik.errors.priority ? (
            <div>{formik.errors.priority}</div>
          ) : null}
        </InputBoxErr> */}

        <ButtonAuth type="submit">Log In Now</ButtonAuth>
      </FormAuthStyled>
    </>
  );
};
