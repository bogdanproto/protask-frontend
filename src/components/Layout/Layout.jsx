import { Header } from 'components/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      Layout
      <Header />
      <Suspense fallback={'LOADING....'}>
        <Outlet />
      </Suspense>
    </>
  );
};
