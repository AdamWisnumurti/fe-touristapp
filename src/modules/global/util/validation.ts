export const isHasLowerCase = (val: string) => {
  const regex = /[a-z]/;
  return regex.test(val);
};

export const isHasUpperCase = (val: string) => {
  const regex = /[A-Z]/;
  return regex.test(val);
};

export const isHasNumber = (val: string) => {
  const regex = /\d+/;
  return regex.test(val);
};

export const isHasMin8 = (val: string) => {
  const regex = /.{8,}/;
  return regex.test(val);
};

export const isNoSpecialChar = (val: string) => {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(val);
};

export const validNumber = (value: string) => {
  const valRegex = /[^0-9.]/g;
  return value.replace(valRegex, '');
};

export const isValidNumber = (number: string) => {
  const numRegex = /^\d+$/;
  return numRegex.test(number);
};

export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const isValidPhone = (number: string) => {
  const phoneRegex = /^[-+,0-9]{10,20}$/;
  return phoneRegex.test(number);
};

export const isLeading8 = (number: string) => {
  const phoneRegex = /^8/;
  return phoneRegex.test(number);
};

export const isValidSize = (files: string, maxSize: number) => {
  // size 1 MB = 1.000.000
  const imageBuffer = Buffer.from(files, 'base64');
  return imageBuffer.length < maxSize;
};

export const isValidPass = (val: string) => {
  return (
    isHasUpperCase(val) &&
    isHasLowerCase(val) &&
    isHasNumber(val) &&
    isHasMin8(val)
    // isNoSpecialChar(val)
  );
};
