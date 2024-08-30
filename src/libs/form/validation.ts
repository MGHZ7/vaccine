export const EMAIL_VALIDATION_PATTERN =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWORD_VALIDATION_REGEX =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

export const validatePasswordConfirmation = (
  password: string,
  passwordConfirmation: string
): boolean | string => {
  return password === passwordConfirmation
    ? true
    : "validations.passwordConfirm";
};

export const validateComplexPassword = (password?: string) => {
  return PASSWORD_VALIDATION_REGEX.test(password ?? "")
    ? true
    : "validations.complexPassword";
};

export const REQUIRED_VALIDATION = {
  required: { value: true, message: `validations.required` },
};
