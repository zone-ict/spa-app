import { combineReducers } from '@reduxjs/toolkit';
import apiService from '../../services/api/api.service';
import { bookingCreationReducer } from '../../stores/bookingCreation.store';
import { sessionReducer } from '../../stores/session.store';
import { settingsReducer } from '../../stores/settings.store';

export const reducers = {
  session: sessionReducer,
  settings: settingsReducer,
  bookingCreation: bookingCreationReducer,
  [apiService.reducerPath]: apiService.reducer,
};

const reducerConfig = combineReducers(reducers);

export default reducerConfig;
