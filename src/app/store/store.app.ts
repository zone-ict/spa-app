import { configureStore } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import reduxLogger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistedState,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistConfig from '../../configs/persist/persist.config';
import reducerConfig from '../../configs/reducer/reducer.config';
import apiService from '../../services/api/api.service';

export const devTools = import.meta.env.DEV;
export const persistedReducer = persistReducer(persistConfig, reducerConfig);

export const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  ...(devTools ? [reduxLogger] : []),
  apiService.middleware,
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof reducerConfig> & PersistedState;
export const persistor = persistStore(store);
export default store;
