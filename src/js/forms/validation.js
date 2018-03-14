/* validation.js
 *
 * This file holds a list of validation functions for forms
 */

/* isRequired:
 * This functions insists that a field have text in it
 */
export const isRequired = (value) => (
    value == undefined || (value && (value.trim() == ''))
        ? 'Required'
        : undefined
);

/* isMinLength:
 * This functions insists that a field have at least "length" number of
 * characters
 */
export const isMinLength = (length) => ((value) => (
    value && (value.trim().length < length) && (value.trim().length > 0)
        ? `Must be at least ${length} characters long`
        : undefined
));