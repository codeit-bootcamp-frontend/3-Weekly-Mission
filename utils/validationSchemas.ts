import * as yup from "yup";

export const signInValidation = yup.object().shape({
  email: yup
    .string()
    .required("이메일을 입력해 주세요")
    .matches(
      /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/,
      "올바른 이메일 주소가 아닙니다"
    ),
  password: yup.string().required("비밀번호를 입력해 주세요"),
});

export const signUpValidation = yup.object().shape({
  email: yup
    .string()
    .required("이메일을 입력해 주세요")
    .matches(
      /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/,
      "올바른 이메일 주소가 아닙니다"
    ),
  password: yup
    .string()
    .required("비밀번호를 입력해 주세요")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
      "비밀번호는 영문자와 숫자를 포함한 최소 8자 이상이어야 합니다."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않아요"),
});
