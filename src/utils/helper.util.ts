/**
 * Collection of helper function to generate or transform data
 */

import { Availability } from '../hooks/useTranslator/useTranslator.hook';

/**
 * Gets a default language to use when no language is provided
 * @returns {Availability} Locale to be used for translation
 */
export function getDefaultLang(): Availability {
  const localeString = navigator.language;

  const languageString = localeString.split(/[_-]/)[0].toLowerCase();

  const checkLang = Object.values(Availability).findIndex((lang) => lang === languageString);

  return checkLang > 0 ? (languageString as Availability) : Availability.en;
}

/**
 * Formats given date in a given format. Uses baseDateFormat when there's no format provided
 * @param date Date to be formatted
 * @param format Date format to be used
 * @returns Formatted Date
 */
export function formatDate(date: Date): string {
  const dateFormat = new Intl.DateTimeFormat();

  return dateFormat.format(date);
}
