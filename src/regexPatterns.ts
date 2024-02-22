//이메일 정규식
export const email_reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

//패스워드 정규식
export const password_reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;