import localforage from 'localforage';

const persistConfig = {
  version: 1,
  key: 'root',
  storage: localforage,
  whitelist: ['session'],
};

export default persistConfig;
