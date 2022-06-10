/**
 * Collection of helper function to generate or transform data
 */

import { Availability } from '../../hooks/useTranslator/useTranslator.hook';

export function getDefaultLang(): Availability {
  const localeString = navigator.language;

  const languageString = localeString.split(/[_-]/)[0].toLowerCase();

  const checkLang = Object.values(Availability).findIndex((lang) => lang === languageString);

  return checkLang > 0 ? (languageString as Availability) : Availability.en;
}

export function generateRandNumFrom1to10(): number {
  return Math.floor(Math.random() * 10) + 1;
}

export function generateRandNumFrom1to100(): number {
  return Math.floor(Math.random() * 100) + 1;
}
