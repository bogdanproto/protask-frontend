import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <Suspense fallback={'LOADING....'}>
      <Outlet />
    </Suspense>
  );
};
