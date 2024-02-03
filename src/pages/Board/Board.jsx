import React from 'react';
import { useParams } from 'react-router';

export const Board = () => {
  const { boardName } = useParams();
  return <div>Board ${boardName}</div>;
};
