import * as Yup from 'yup';

export const columnFormSchema = Yup.object({
  title: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .trim()
    .required('Title is required'),
});
