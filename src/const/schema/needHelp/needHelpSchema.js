import * as Yup from 'yup';

export const needHelpSchema = Yup.object({
  comment: Yup.string()
    .min(10, 'Must be 10 characters or more')
    .max(300, 'Must be 300 characters or less')
    .trim()
    .required('Comment is required'),
  email: Yup.string()
    .email('Invalid email format')
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid email format'
    )
    .trim()
    .required('Email is required'),
});
