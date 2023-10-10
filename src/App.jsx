import React from 'react';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './utils/PrivateRoute';
import { RestrictedRoute } from './utils/RestrictedRoute';
import { refreshUser } from './redux/auth/operations';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFound/notFound';

const RegisterPage = lazy(() => import('./pages/Register/Register'));
const LoginPage = lazy(() => import('./pages/Login/Login'));
const ContactsPage = lazy(() => import('./pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch("/");

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
