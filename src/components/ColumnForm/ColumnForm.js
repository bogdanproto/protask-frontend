import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn, updateColumn } from 'redux/dataSlice/operations';
import { ColumnFormStyled } from './ColumnForm.styled';
import { AddButton, Input, InputBoxErr } from 'components/common';
import { columnFormSchema } from 'const';
import { succesMsgSelectorData } from 'redux/commonSelector';
import { useEffect } from 'react';

export const ColumnForm = ({
  columnId = null,
  boardId = null,
  title = null,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const isSuccessDispatch = useSelector(succesMsgSelectorData);

  const formik = useFormik({
    initialValues: {
      title: title ? title : '',
    },
    validationSchema: columnFormSchema,

    onSubmit: data => {
      if (columnId && columnId !== '') {
        dispatch(updateColumn({ ...data, _id: columnId }));
        return;
      }

      dispatch(addColumn({ ...data, boardId }));
    },
  });

  useEffect(() => {
    if (isSuccessDispatch && formik.dirty) {
      closeModal();
    }
  }, [closeModal, formik.dirty, isSuccessDispatch]);

  return (
    <ColumnFormStyled onSubmit={formik.handleSubmit}>
      <h3>{columnId ? 'Edit column' : 'Add column'}</h3>
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

      <AddButton type="submit" disabled={!formik.dirty}>
        {columnId ? 'Edit' : 'Add'}
      </AddButton>
    </ColumnFormStyled>
  );
};
