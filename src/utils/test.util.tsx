/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */

/**
 * NOTE: Eslint any rule is disabled because the functions are used to mock store that can accept any
 * type of reducers and actions, both right or wrong for testing purpose.
 * While no-extraneous-dependencies expect @testing-library/react to be included in dependencies
 * even though it's only used to run jest on Node environment
 */

import {
  AnyAction,
  configureStore,
  EnhancedStore,
  Middleware,
  Reducer,
  Store,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cleanup } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import apiService from '../services/api/api.service';
import { sessionReducer } from '../stores/session/session.store';
import { settingsReducer } from '../stores/settings/settings.store';

interface StoreWrapperProps {
  children: React.ReactNode;
}

export function withProvider(store: Store) {
  // Ignoring this because we're using this for testing purposes only
  // eslint-disable-next-line func-names
  return function ({ children }: StoreWrapperProps) {
    return <Provider store={store}>{children}</Provider>;
  };
}

export function setupApiStore<
  A extends {
    reducerPath: 'api';
    reducer: Reducer<any, any>;
    middleware: Middleware;
    util: { resetApiState(): any };
  },
  R extends Record<string, Reducer<any, any>> = Record<never, never>,
>(api: A, extraReducers?: R, withoutListeners?: boolean) {
  const getStore = () =>
    configureStore({
      reducer: {
        [api.reducerPath]: api.reducer,
        ...extraReducers,
      },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(api.middleware),
    });

  type StoreType = EnhancedStore<
    {
      api: ReturnType<A['reducer']>;
    } & {
      [K in keyof R]: ReturnType<R[K]>;
    },
    AnyAction,
    ReturnType<typeof getStore> extends EnhancedStore<any, any, infer M> ? M : never
  >;

  const initialStore = getStore() as StoreType;
  const refObj = {
    api,
    store: initialStore,
    wrapper: withProvider(initialStore),
  };

  let cleanupListeners: () => void;

  beforeEach(() => {
    const store = getStore() as StoreType;
    refObj.store = store;
    refObj.wrapper = withProvider(store);

    if (!withoutListeners) {
      cleanupListeners = setupListeners(store.dispatch);
    }
  });

  afterEach(() => {
    cleanup();

    if (!withoutListeners) {
      cleanupListeners();
    }

    refObj.api.util.resetApiState();
  });

  return refObj;
}

export const storeTest = setupApiStore(apiService, {
  session: sessionReducer,
  settings: settingsReducer,
});
