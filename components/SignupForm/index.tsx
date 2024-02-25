import { FormEvent, useState } from 'react';
import { Input } from '@/components/Input';
import styles from './styles.module.css';
import {
  ERROR_MESSAGES,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from '@/constants/constants';
import { useRouter } from 'next/router';
import { postDuplicateEmail, postUserSignup } from '@/api/api';

export const SignupForm = () => {
  const [emailInputValue, setemailInputValue] = useState<string>('');
  const [passwordInputValue, setPasswordInputValue] = useState<string>('');
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] =
    useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');
  const router = useRouter();

  const handleEmailInputBlur = async () => {
    if (!emailInputValue) {
      setIsEmailValid(false);
      setEmailErrorMessage(ERROR_MESSAGES.EMAIL_REQUIRED);
      return;
    }
    if (!EMAIL_REGEX.test(emailInputValue)) {
      setIsEmailValid(false);
      setEmailErrorMessage(ERROR_MESSAGES.INVALID_EMAIL);
      return;
    }

    const response = await postDuplicateEmail(emailInputValue);
    if (!response) {
      setIsEmailValid(false);
      setEmailErrorMessage(ERROR_MESSAGES.DUPLICATE_EMAIL);
      return;
    }

    setIsEmailValid(true);
    setEmailErrorMessage('');
  };

  const handlePasswordInputBlur = () => {
    if (!passwordInputValue) {
      setIsPasswordValid(false);
      setPasswordErrorMessage(ERROR_MESSAGES.PASSWORD_REQUIRED);
      return;
    }
    if (
      !PASSWORD_REGEX.test(passwordInputValue) ||
      passwordInputValue.length < 8
    ) {
      setIsPasswordValid(false);
      setPasswordErrorMessage(ERROR_MESSAGES.INVALID_PASSWORD);
      return;
    }
    setIsPasswordValid(true);
    setPasswordErrorMessage('');
  };

  const handleConfirmPasswordInputBlur = () => {
    if (!confirmPasswordInputValue) {
      setIsConfirmPasswordValid(false);
      setConfirmPasswordErrorMessage(ERROR_MESSAGES.CONFIRM_PASSWORD_REQUIRED);
      return;
    }
    if (confirmPasswordInputValue !== passwordInputValue) {
      setIsConfirmPasswordValid(false);
      setConfirmPasswordErrorMessage(ERROR_MESSAGES.INVALID_CONFIRM_PASSWORD);
      return;
    }
    setIsConfirmPasswordValid(true);
    setConfirmPasswordErrorMessage('');
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: emailInputValue,
      password: passwordInputValue,
    };

    try {
      const response = await postUserSignup(user);
      if (!response) {
        setIsEmailValid(false);
        setIsPasswordValid(false);
        setIsConfirmPasswordValid(false);
        setEmailErrorMessage(ERROR_MESSAGES.EMAIL_CHECK_FAILED);
        setPasswordErrorMessage(ERROR_MESSAGES.PASSWORD_CHECK_FAILED);
        setConfirmPasswordErrorMessage(
          ERROR_MESSAGES.CONFIRM_PASSWORD_CHECK_FAILED,
        );
        return;
      }
      const { accessToken, refreshToken } = response;
      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setIsEmailValid(true);
        setIsPasswordValid(true);
        setIsConfirmPasswordValid(true);
        setEmailErrorMessage('');
        setPasswordErrorMessage('');
        setConfirmPasswordErrorMessage('');
        router.push('/folder');
      } else {
        throw Error('No Token');
      }
    } catch (error) {
      alert(ERROR_MESSAGES.SIGN_UP_FAILED);
      throw error;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <Input
        type="string"
        id="sign-email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
        inputValue={emailInputValue}
        setInputValue={setemailInputValue}
        handleInputBlur={handleEmailInputBlur}
        isError={!isEmailValid}
        errorMessage={emailErrorMessage}
      />
      <Input
        type="password"
        id="sign-password"
        label="비밀번호"
        placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
        inputValue={passwordInputValue}
        setInputValue={setPasswordInputValue}
        handleInputBlur={handlePasswordInputBlur}
        isError={!isPasswordValid}
        errorMessage={passwordErrorMessage}
      />
      <Input
        type="password"
        id="sign-confirm-password"
        label="비밀번호 확인"
        placeholder="비밀번호와 일치하는 값을 입력해주세요."
        inputValue={confirmPasswordInputValue}
        setInputValue={setConfirmPasswordInputValue}
        handleInputBlur={handleConfirmPasswordInputBlur}
        isError={!isConfirmPasswordValid}
        errorMessage={confirmPasswordErrorMessage}
      />
      <button className={styles['submit-button']} type="submit">
        회원가입
      </button>
    </form>
  );
};
