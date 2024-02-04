import React from 'react';
import { useParams } from 'react-router';

export const Auth = () => {
  const { id } = useParams();
  return <>{id === 'login' ? 'LOGIN FORM' : 'REGISTRATION FORM'}</>;
};
