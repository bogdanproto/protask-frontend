import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormAuthStyled } from 'components/Auth/common/Form/FormAuth.styled';
import { InputBoxErr } from 'components/common';
import { ButtonAuth } from 'components/Auth/common/ButtonAuth/ButtonAuth';
import { useDispatch } from 'react-redux';
import { InputCardForm } from './InputCardForm/InputCardForm';
import {
  CustomRadio,
  Input,
  Label,
  RadioButtnonBox,
  RadioContainer,
} from './InputRadio/InputRadio.styled';
import DatePicker from 'react-datepicker';
import { DatePickerBlock, DatePickerField } from './DatePicker/DatePicker';

const cardSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

export const CardForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      priority: '',
      date: '',
    },
    validationSchema: cardSchema,

    onSubmit: values => {
      console.log(values);
      // dispatch();
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
        <div>
          <Label id="checkbox-group">Label color</Label>
          <RadioButtnonBox role="group" aria-labelledby="checkbox-group">
            <RadioContainer>
              <Input
                type="radio"
                name="priority"
                value="low"
                checked={formik.values.priority === 'low'}
                onChange={formik.handleChange}
              />
              <CustomRadio $mode="low"></CustomRadio>
            </RadioContainer>
            <RadioContainer>
              <Input
                type="radio"
                name="priority"
                value="medium"
                checked={formik.values.priority === 'medium'}
                onChange={formik.handleChange}
              />
              <CustomRadio $mode="medium"></CustomRadio>
            </RadioContainer>
            <RadioContainer>
              <Input
                type="radio"
                name="priority"
                value="high"
                checked={formik.values.priority === 'high'}
                onChange={formik.handleChange}
              />
              <CustomRadio $mode="high"></CustomRadio>
            </RadioContainer>
            <RadioContainer>
              <Input
                type="radio"
                name="priority"
                value="default"
                checked={formik.values.priority === 'default'}
                onChange={formik.handleChange}
              />
              <CustomRadio $mode="default"></CustomRadio>
            </RadioContainer>
          </RadioButtnonBox>
        </div>
        <div>
          <Label>Deadline</Label>
          <DatePickerField name="date" />
          />
        </div>

        <ButtonAuth type="submit">Log In Now</ButtonAuth>
      </FormAuthStyled>
    </>
  );
};
