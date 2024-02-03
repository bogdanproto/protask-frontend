import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <Link to={`/home/test`}> testBoard </Link>
    </div>
  );
};
