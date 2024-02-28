import { EMAIL_REGEX, PASSWORD_REGEX } from '../regex';

import {
  SigninInputs,
  SigninInputsOptions,
  SignupInputs,
  SignupInputsOptions,
  SubmitErrorMsg,
} from '@/interface/sign/sign';

export const SIGN = {
  EMAIL: 'email',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
} as const;

export const SIGNIN_REGISTER_OPTIONS: SigninInputsOptions<SigninInputs> = {
  email: {
    pattern: {
      value: EMAIL_REGEX,
      message: '올바른 이메일 주소가 아닙니다.',
    },
    required: {
      value: true,
      message: '이메일을 입력해주세요.',
    },
  },
  password: {
    required: {
      value: true,
      message: '비밀번호를 입력해주세요.',
    },
  },
};

export const SIGNUP_REGISTER_OPTIONS: SignupInputsOptions<SignupInputs> = {
  email: {
    pattern: {
      value: EMAIL_REGEX,
      message: '올바른 이메일 주소가 아닙니다.',
    },
    required: {
      value: true,
      message: '이메일을 입력해주세요.',
    },
  },
  password: {
    required: {
      value: true,
      message: '비밀번호를 입력해주세요.',
    },
    pattern: {
      value: PASSWORD_REGEX,
      message: '비밀번호는 8자 이상의 영문, 숫자 조합이어야 합니다.',
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: '비밀번호와 일치하는 값을 입력해 주세요.',
    },
    // validate: (value) => value === getValues().password || '비밀번호가 일치하지 않습니다.',
  },
};

export const SUBMIT_ERROR_MSG_LIST: SubmitErrorMsg[] = [
  {
    name: 'email',
    message: '이메일을 확인해주세요.',
  },
  {
    name: 'password',
    message: '비밀번호를 확인해주세요.',
  },
];
