import { Routes, Route } from 'react-router-dom';
import { lazy, React } from 'react';
import { Layout } from 'components/Layout/Layout';

export const RoutesComp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path={WELCOME} element={<Layout />}></Route>
      </Routes>
    </>
  );
};
