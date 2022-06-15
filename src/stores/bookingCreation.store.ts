// #region IMPORTS

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityType } from '../models/Activity.model';

// #endregion

// #region ACTION PAYLOADS

type StartCreationPayload = {
  activityTypeUid: string;
  activityUid: string;
  userUid: string;
  workshopUid: string;
  activityTypes: ActivityType[];
  activityName: string;
  workshopName: string;
  activityPhotoUrl: string;
};

type UpdateActivityType = {
  activityUid: string;
};

// #endregion

// #region INITIAL STATE

export interface BookingCreationStore {
  isCreating: boolean;
  activityTypeUid: string;
  activityUid: string;
  userUid: string;
  workshopUid: string;
  activityTypes: ActivityType[];
  activityName: string;
  workshopName: string;
  activityPhotoUrl: string;
}

export const bookingCreationInitialState: BookingCreationStore = {
  isCreating: false,
  activityTypeUid: '',
  activityUid: '',
  userUid: '',
  workshopUid: '',
  activityTypes: [],
  activityName: '',
  workshopName: '',
  activityPhotoUrl: '',
};

// #endregion

const bookingCreationSlice = createSlice({
  name: 'bookingCreation',
  initialState: bookingCreationInitialState,
  reducers: {
    startCreation: (state, action: PayloadAction<StartCreationPayload>) => ({
      ...state,
      ...action.payload,
      isCreating: true,
    }),
    updateActivityType: (state, action: PayloadAction<UpdateActivityType>) => ({
      ...state,
      activityTypeUid: action.payload.activityUid,
    }),
    stopCreation: (state) => ({
      ...state,
      ...bookingCreationInitialState,
    }),
  },
});

export const bookingCreationAction = bookingCreationSlice.actions;
export const bookingCreationReducer = bookingCreationSlice.reducer;
