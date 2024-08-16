/**
 * This module contains all the available functions for converting between cases.
 * @module
 * @example
 * ```ts
 * import {
 *  camelToSnake,
 * } from './main.ts';
 * 
 * console.log(camelToSnake("helloWorld"));
 * ```
 */

/**
 * Converts camelCase to snake_case.
 * @param str - The camelCase string.
 * @returns The snake_case string.
 */
export function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

/**
* Converts snake_case to camelCase.
* @param str - The snake_case string.
* @returns The camelCase string.
*/
export function snakeToCamel(str: string): string {
  return str.toLowerCase().replace(/_./g, match => match.charAt(1).toUpperCase());
}

/**
* Converts camelCase to PascalCase.
* @param str - The camelCase string.
* @returns The PascalCase string.
*/
export function camelToPascal(str: string): string {
  return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
}

/**
* Converts PascalCase to camelCase.
* @param str - The PascalCase string.
* @returns The camelCase string.
*/
export function pascalToCamel(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
* Converts camelCase to kebab-case.
* @param str - The camelCase string.
* @returns The kebab-case string.
*/
export function camelToKebab(str: string): string {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

/**
* Converts kebab-case to camelCase.
* @param str - The kebab-case string.
* @returns The camelCase string.
*/
export function kebabToCamel(str: string): string {
  return str.toLowerCase().replace(/-./g, match => match.charAt(1).toUpperCase());
}

/**
* Converts camelCase to UPPER_SNAKE_CASE.
* @param str - The camelCase string.
* @returns The UPPER_SNAKE_CASE string.
*/
export function camelToUpperSnake(str: string): string {
  return camelToSnake(str).toUpperCase();
}

/**
* Converts UPPER_SNAKE_CASE to camelCase.
* @param str - The UPPER_SNAKE_CASE string.
* @returns The camelCase string.
*/
export function upperSnakeToCamel(str: string): string {
  return snakeToCamel(str.toLowerCase());
}

/**
* Converts string to lowercase.
* @param str - The input string.
* @returns The lowercase string.
*/
export function toLowerCase(str: string): string {
  return str.toLowerCase();
}

/**
* Converts string to uppercase.
* @param str - The input string.
* @returns The uppercase string.
*/
export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

/**
* Converts camelCase to Title Case.
* @param str - The camelCase string.
* @returns The Title Case string.
*/
export function camelToTitle(str: string): string {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

/**
* Converts string to Sentence case.
* @param str - The input string.
* @returns The Sentence case string.
*/
export function toSentenceCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
* Converts camelCase to Dot notation.
* @param str - The camelCase string.
* @returns The Dot notation string.
*/
export function camelToDotNotation(str: string): string {
  return str.replace(/[A-Z]/g, letter => `.${letter.toLowerCase()}`);
}

/**
* Converts Dot notation to camelCase.
* @param str - The Dot notation string.
* @returns The camelCase string.
*/
export function dotNotationToCamel(str: string): string {
  return str.toLowerCase().replace(/\.(.)/g, (_, group1) => group1.toUpperCase());
}
