import { Layout } from '@src/layout';
import { RegisterForm } from '@src/pages/register-form';
import { LoginForm } from '@src/pages/login-form';
import { Profile } from '@src/pages/profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@src/components/toast/context';
import { RequireAuth, FormWrapper } from '@src/hoc';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route
                  path=":source"
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
            </Routes>
          </BrowserRouter>
        </Layout>
      </QueryClientProvider>
    </ToastProvider>
  );
};
