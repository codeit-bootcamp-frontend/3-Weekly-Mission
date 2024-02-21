export const ERRORS = Object.freeze({
  SIGN_IN_FAILED: "로그인에 실패했습니다. ID와 비밀번호를 확인해주세요.",
  SIGN_UP_FAILED: "회원가입에 실패했습니다. ID와 비밀번호를 확인해주세요.",

  EMAIL: {
    VOID: "이메일을 입력해주세요.",
    INVALID: "올바른 이메일 주소가 아닙니다.",
    WRONG: "이메일을 확인해주세요.",
    DUPLICATED: "중복된 이메일이 존재합니다.",

  },
  PASSWORD: {
    VOID: "비밀번호를 입력해주세요.",
    LENGTH: "비밀번호는 8자 이상 20자 이하여야 합니다.",
    VALIDATION: "비밀번호는 숫자, 대소문자, 특수문자를 포함해야 합니다.",
    NOT_MATCH: "비밀번호가 일치하지 않습니다.",
    WRONG: "비밀번호를 확인해주세요.",
  },
});
