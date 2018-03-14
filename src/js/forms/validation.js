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