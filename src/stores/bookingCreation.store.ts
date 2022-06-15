// #region IMPORTS

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// #endregion

// #region ACTION PAYLOADS

type StartCreationPayload = {
  activityTypeUid: string;
  activityUid: string;
  userUid: string;
  workshopUid: string;
};

// #endregion

// #region INITIAL STATE

export interface BookingCreationStore {
  isCreating: boolean;
  creationPayload?: StartCreationPayload;
}

export const bookingCreationInitialState: BookingCreationStore = {
  isCreating: false,
};

// #endregion

const bookingCreationSlice = createSlice({
  name: 'bookingCreation',
  initialState: bookingCreationInitialState,
  reducers: {
    startCreation: (state, action: PayloadAction<StartCreationPayload>) => ({
      ...state,
      isCreating: true,
      creationPayload: action.payload,
    }),
    stopCreation: (state) => ({
      ...state,
      ...bookingCreationInitialState,
    }),
  },
});

export const bookingCreationAction = bookingCreationSlice.actions;
export const bookingCreationReducer = bookingCreationSlice.reducer;
