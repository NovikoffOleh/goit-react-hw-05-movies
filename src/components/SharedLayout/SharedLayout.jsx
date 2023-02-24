import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import s from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <h1 style={{ textAlign: 'center', color: '#2a2a2a', margin: '10px 0' }}>КіноПошук</h1>
        <nav className={s.links}>
          <NavLink className={s.button} to="/">
            До дому
          </NavLink>
          <NavLink className={s.button} to="/movies">
            Фільми
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
