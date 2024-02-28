export function emailChecker(text = "") {
  const emailReg = new RegExp("[a-z0-9]+@[a-z0-9]+.[a-z0-9]");
  return emailReg.test(text);
}

export function passwordChecker(text = "") {
  const passwordReg = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/);
  return passwordReg.test(text);
}
