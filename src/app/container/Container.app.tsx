import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import RouterApp from '../router/Router.app';
import store, { persistor } from '../store/store.app';
import ErrorBoundary from './ErrorBoundary.app';

export default function Container() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <RouterApp />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
