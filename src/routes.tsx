import { Routes as Routers, Route } from 'react-router-dom';
import { RegisterForm } from '@src/pages/register-form';
import { LoginForm } from '@src/pages/login-form';
import { Profile } from '@src/pages/profile';
import { PageNotFound } from '@src/pages/page-not-found';
import { RequireAuth, FormWrapper } from '@src/hoc';

export const Routes = () => {
  return (
    <Routers>
      <Route path="*" element={<PageNotFound />} />

      <Route path="/">
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Route>

      <Route
        path="/register"
        element={
          <FormWrapper>
            <RegisterForm />
          </FormWrapper>
        }
      />

      <Route
        path="/login"
        element={
          <FormWrapper>
            <LoginForm />
          </FormWrapper>
        }
      />
    </Routers>
  );
};
