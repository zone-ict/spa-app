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
 * Formats given date to string
 * @param date Date to be formatted
 * @returns Formatted Date
 */
export function formatDate(date: Date): string {
  const dateFormat = new Intl.DateTimeFormat();

  return dateFormat.format(date);
}

/**
 * Checks whether the given value is part of an enum or not
 * @param value Value to be checked
 * @param enumType The enum to be checked against
 * @returns Boolean indicating if value is in enum or not
 */
export function isPartOfEnum<T>(value: T, enumType: object): value is T {
  return Object.values(enumType).includes(value);
}
