import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Availability } from '../../hooks/useTranslator/useTranslator.hook';
import { getDefaultLang } from '../../utils/helper.util';

// #region ACTION PAYLOADS

type ChangeLanguagePayload = { language: Availability };

// #endregion

// #region INITIAL STATE

export interface SettingsStore {
  currentLanguage: Availability;
}

export const settingsStoreInitialState: SettingsStore = {
  currentLanguage: getDefaultLang(),
};

// #endregion

const settingsSlice = createSlice({
  name: 'settings',
  initialState: settingsStoreInitialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<ChangeLanguagePayload>) => ({
      ...state,
      currentLanguage: action.payload.language,
    }),
    resetLanguage: (state) => ({
      ...state,
      currentLanguage: settingsStoreInitialState.currentLanguage,
    }),
  },
});

export const settingsAction = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
