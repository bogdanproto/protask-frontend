import * as Yup from 'yup';

export const boardCreateSchema = Yup.object().shape({
  title: Yup.string().min(2).required('Title is required'),
  icon: Yup.string(),
  background: Yup.string(),
});
