import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import apiService from '../services/api/api.service';

// #region ACTION PAYLOADS

type ChangeTokenPayload = { token: string };
type LoginPayload = { token: string };

// #endregion

// #region INITIAL STATE

export interface SessionStore {
  isLoggedIn: boolean;
  token: string;
}

export const sessionStoreInitialState: SessionStore = {
  isLoggedIn: false,
  token: '',
};

// #endregion

const sessionSlice = createSlice({
  name: 'session',
  initialState: sessionStoreInitialState,
  reducers: {
    changeToken: (state, action: PayloadAction<ChangeTokenPayload>) => ({
      ...state,
      token: action.payload.token,
    }),
    login: (state, action: PayloadAction<LoginPayload>) => ({
      ...state,
      isLoggedIn: true,
      token: action.payload.token,
    }),
    logout: (state) => ({
      ...state,
      ...sessionStoreInitialState,
    }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(apiService.endpoints.login.matchFulfilled, (state, action) => ({
      ...state,
      isLoggedIn: true,
      token: action.payload.token,
    }));
  },
});

export const sessionAction = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
