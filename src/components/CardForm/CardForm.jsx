import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormAuthStyled } from 'components/Auth/common/Form/FormAuth.styled';
import { InputBoxErr } from 'components/common';

import { InputCardForm } from './InputCardForm/InputCardForm';
import {
  CustomRadio,
  Input,
  Label,
  RadioButtnonBox,
  RadioContainer,
} from './InputRadio/InputRadio.styled';
import {
  DatePickerStyled,
  IconStyled,
  TitleStyled,
} from './DatePicker/DatePiker.styled';
import 'react-datepicker/dist/react-datepicker.css';

import { format } from 'date-fns';

import { CardBtn } from './CardBtn/CardBtn';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, updateCard } from 'redux/dataSlice/operations';
import { succesMsgSelectorData } from 'redux/commonSelector';

const cardSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

export const CardForm = ({
  cardId = null,
  title = '',
  description = '',
  priority = 'without',
  deadline = '',
  columnId,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const isSuccessDispatch = useSelector(succesMsgSelectorData);
  const formik = useFormik({
    initialValues: {
      title,
      description,
      priority,
      deadline,
    },
    validationSchema: cardSchema,

    onSubmit: values => {
      if (cardId) {
        dispatch(updateCard({ ...values, _id: cardId }));
        return;
      }
      dispatch(addCard({ ...values, columnId }));
    },
  });

  useEffect(() => {
    if (isSuccessDispatch) {
      closeModal();
    }
  }, [closeModal, isSuccessDispatch]);
  return (
    <>
      <FormAuthStyled onSubmit={formik.handleSubmit}>
        <TitleStyled> {cardId ? 'Edit card' : 'Add card'}</TitleStyled>
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
                value="without"
                checked={formik.values.priority === 'without'}
                onChange={formik.handleChange}
              />
              <CustomRadio $mode="without"></CustomRadio>
            </RadioContainer>
          </RadioButtnonBox>
        </div>
        <div>
          <Label>Deadline</Label>
          <DatePickerStyled
            id="deadline"
            name="deadline"
            onChange={deadline =>
              formik.setFieldValue('deadline', format(deadline, 'yyyy-MM-dd'))
            }
            onBlur={formik.handleBlur}
            selected={formik.values.deadline}
            dateFormat="MMMM  d"
            placeholderText={`Today,${format(new Date(), 'MMMM d')}`}
            showIcon
            icon={<IconStyled viewBox="0 0 18 18" />}
            toggleCalendarOnIconClick
            inputContainerClassName="test"
          />
        </div>

        <CardBtn
          action={cardId ? 'Edit' : 'Add'}
          disabled={formik.dirty ? false : true}
        />
      </FormAuthStyled>
    </>
  );
};
