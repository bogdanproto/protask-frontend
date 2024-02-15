import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, AddButton, InputBoxErr } from 'components/common';
import {
  CustomRadio,
  InputRadio,
  Label,
  RadioButtnonBox,
  RadioContainer,
} from './InputRadio/InputRadio.styled';
import { TitleStyled } from './DatePicker/DatePiker.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addCard, updateCard } from 'redux/dataSlice/operations';
import { succesMsgSelectorData } from 'redux/commonSelector';
import { TextAreaCardStyled } from './InputCardForm/InputCardForm.styled';
import { BoardFormStyled } from 'components/BoardForm/BoardForm.styled';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const cardSchema = Yup.object().shape({
  title: Yup.string().min(2).required('Title is required'),
  description: Yup.string().required('Description is required'),
});

export const CardForm = ({
  cardId = null,
  title = '',
  description = '',
  priority = 'without',
  deadline,
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
      deadline: deadline ? dayjs(deadline) : dayjs(),
    },
    validationSchema: cardSchema,

    onSubmit: values => {
      if (cardId) {
        dispatch(
          updateCard({
            ...values,
            _id: cardId,
            deadline: dayjs(values.deadline).format('YYYY-MM-DD'),
          })
        );
        return;
      }
      dispatch(
        addCard({
          ...values,
          columnId,
          deadline: dayjs(values.deadline).format('YYYY-MM-DD'),
        })
      );
    },
  });

  useEffect(() => {
    if (isSuccessDispatch && formik.dirty) {
      closeModal();
    }
  }, [closeModal, formik.dirty, isSuccessDispatch]);

  return (
    <>
      <BoardFormStyled onSubmit={formik.handleSubmit}>
        <TitleStyled> {cardId ? 'Edit card' : 'Add card'}</TitleStyled>
        <InputBoxErr>
          <Input
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
          <TextAreaCardStyled
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
              <InputRadio
                type="radio"
                name="priority"
                value="low"
                checked={formik.values.priority === 'low'}
                onChange={formik.handleChange}
              />
              <CustomRadio $mode="low"></CustomRadio>
            </RadioContainer>
            <RadioContainer>
              <InputRadio
                type="radio"
                name="priority"
                value="medium"
                checked={formik.values.priority === 'medium'}
                onChange={formik.handleChange}
              />
              <CustomRadio $mode="medium"></CustomRadio>
            </RadioContainer>
            <RadioContainer>
              <InputRadio
                type="radio"
                name="priority"
                value="high"
                checked={formik.values.priority === 'high'}
                onChange={formik.handleChange}
              />
              <CustomRadio $mode="high"></CustomRadio>
            </RadioContainer>
            <RadioContainer>
              <InputRadio
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

          <DatePicker
            value={formik.values.deadline}
            onChange={date => {
              formik.setFieldValue('deadline', date);
            }}
            format={`MMMM DD`}
            minDate={dayjs()}
            sx={{
              gap: '20px',
              width: '160px',

              '.Mui-focused': {
                borderWidth: '0',
              },
              '& .MuiOutlinedInput-root': {
                borderWidth: '0',

                '& .MuiOutlinedInput-notchedOutline': {
                  borderWidth: '0',
                },

                '& .MuiInputBase-input': {
                  padding: '0',
                  color: '#BEDBB0',
                },
                '& .MuiIconButton-edgeEnd': {
                  margin: '0',
                  color: '#FFFFFF',
                  width: '34px',
                  height: '34px',
                },
              },
            }}
          />
        </div>

        <AddButton type="submit" disabled={!formik.dirty}>
          {cardId ? 'Edit' : 'Add'}
        </AddButton>
      </BoardFormStyled>
    </>
  );
};
