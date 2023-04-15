import { isCPF, isDate, isPhone } from 'brazilian-values';

export const validateCPF = (cpf: string): boolean => {
  if (isCPF(cpf)) {
    return true;
  }
  return false;
};

export const validatePhone = (phone: string): boolean => {
  if (isPhone(phone)) {
    return true;
  }

  return false;
};

export const validateDate = (date: string): boolean => {
  if (isDate(date)) {
    return true;
  }

  return false;
};

export const validateEmail = (email: string): boolean => {
  const regexEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  if (email.match(regexEmail)) {
    return true;
  }

  return false;
};
