import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import RouterApp from '../router/Router.app';
import store, { persistor } from '../store/store.app';
import ErrorBoundary from './ErrorBoundary.app';

export default function Container() {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 60,
        },
      },
    }),
  );

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <RouterApp />
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
