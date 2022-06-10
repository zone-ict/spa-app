import { combineReducers } from '@reduxjs/toolkit';
import apiService from '../../services/api/api.service';
import { sessionReducer } from '../../stores/session/session.store';
import { settingsReducer } from '../../stores/settings/settings.store';

export const reducers = {
  session: sessionReducer,
  settings: settingsReducer,
  [apiService.reducerPath]: apiService.reducer,
};

const reducerConfig = combineReducers(reducers);

export default reducerConfig;
