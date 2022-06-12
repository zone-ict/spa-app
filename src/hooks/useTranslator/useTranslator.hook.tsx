import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store.app';
import localeConfig from '../../configs/locale/locale.config';

// #region TYPES

export enum Availability {
  en = 'en',
  id = 'id',
}

type Indexable = {
  [key: string]: string | undefined;
};

type DefaultLang = {
  [key in Availability]: string;
};

export interface Lang extends DefaultLang, Indexable {
  unique?: string;
}

// #endregion

export default function useTranslator(locales: Lang[] = localeConfig) {
  const currentLanguage = useSelector((state: RootState) => state.settings.currentLanguage);

  const translate = useCallback(
    (key: string, unique?: string) => {
      const langMap =
        locales.find((locale) => (unique ? locale.unique === unique : locale.en === key)) ||
        locales.find((locale) => locale.en === key);

      if (langMap && langMap[currentLanguage] != null) {
        return langMap[currentLanguage] || key;
      }

      return key;
    },
    [currentLanguage, locales],
  );

  return {
    translate,
  };
}

// #endregion
