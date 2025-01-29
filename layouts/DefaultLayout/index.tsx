import { Outlet } from 'react-router-dom';
import { Header } from '../../src/components/Header';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
