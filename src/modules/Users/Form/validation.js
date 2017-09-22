
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const maxLength15 = maxLength(15);
export const minLength2 = minLength(2);
export const required = value => (value ? undefined : 'Required');
