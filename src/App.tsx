import { Layout } from '@src/layout';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@src/components/toast/context';

import { Routes } from './routes';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Layout>
      </QueryClientProvider>
    </ToastProvider>
  );
};
