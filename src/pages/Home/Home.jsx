import { Button } from 'components/common';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from 'redux/authSlice/operations';

export const Home = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutUser());
  };

  return (
    <div>
      <Link to={`/home/test`}> testBoard </Link>
      <Button onClick={handleClick}>LogOut</Button>
    </div>
  );
};
