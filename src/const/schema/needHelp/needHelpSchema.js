import * as Yup from 'yup';

export const needHelpSchema = Yup.object({
  comment: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .max(256, 'Must be 256 characters or less')
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
