import { emailRegex, pwdRegex } from "@/constants/sign";

interface ValidatorType {
  required: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  // validate?: {
  //   matchPassword: (value: any) => boolean | string;
  // };
}

export const emailValidator = {
  required: "이메일을 입력해 주세요.",
  pattern: {
    value: emailRegex,
    message: "올바른 이메일 주소가 아닙니다.",
  },
};

export const signInPasswordValidator: ValidatorType = {
  required: "비밀번호를 입력해 주세요.",
};

export const signUpPasswordValidator: ValidatorType = {
  required: "비밀번호를 입력해 주세요.",
  pattern: {
    value: pwdRegex,
    message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  },
};
