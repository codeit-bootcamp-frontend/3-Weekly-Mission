export const REGEX = Object.freeze({
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  //check that password contains at least one number, and one  letter and is at least 8 characters long and at most 20 characters long
  PASSWORD: /^(?=.*\d)(?=.*[A-z]).{8,20}$/,
});
