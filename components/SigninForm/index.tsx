import { FormEvent, useState } from 'react';
import { Input } from '@/components/Input';
import styles from './styles.module.css';
import { ERROR_MESSAGES, EMAIL_REGEX, API } from '@/constants/constants';
import { useRouter } from 'next/router';
import { postUserSignin } from '@/api/api';

export const SigninForm = () => {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const router = useRouter();

  const handleEmailInputBlur = () => {
    if (!emailInputValue) {
      setIsEmailValid(false);
      setEmailErrorMessage(ERROR_MESSAGES.EMAIL_REQUIRED);
      return;
    }
    if (!EMAIL_REGEX.test(emailInputValue)) {
      setIsEmailValid(true);
      setEmailErrorMessage(ERROR_MESSAGES.INVALID_EMAIL);
      return;
    }
    setIsEmailValid(true);
    setEmailErrorMessage('');
  };

  const handlePsswordInputBlur = () => {
    if (!passwordInputValue) {
      setIsPasswordValid(false);
      setPasswordErrorMessage(ERROR_MESSAGES.PASSWORD_REQUIRED);
      return;
    }
    setIsPasswordValid(true);
    setPasswordErrorMessage('');
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: emailInputValue,
      password: passwordInputValue,
    };

    try {
      const result = await postUserSignin(user);
      if (result === null) {
        setIsEmailValid(false);
        setIsPasswordValid(false);
        setEmailErrorMessage(ERROR_MESSAGES.EMAIL_CHECK_FAILED);
        setPasswordErrorMessage(ERROR_MESSAGES.PASSWORD_CHECK_FAILED);
        return;
      }
      const { accessToken, refreshToken } = result.data;
      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setIsEmailValid(true);
        setIsPasswordValid(true);
        setEmailErrorMessage('');
        setPasswordErrorMessage('');
        router.push('/folder');
      } else {
        throw Error('No Token');
      }
    } catch (error) {
      alert(ERROR_MESSAGES.SIGN_IN_FAILED);
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
        setInputValue={setEmailInputValue}
        handleInputBlur={handleEmailInputBlur}
        isError={!isEmailValid}
        errorMessage={emailErrorMessage}
      />
      <Input
        type="password"
        id="sign-password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        inputValue={passwordInputValue}
        setInputValue={setPasswordInputValue}
        handleInputBlur={handlePsswordInputBlur}
        isError={!isPasswordValid}
        errorMessage={passwordErrorMessage}
      />
      <button className={styles['submit-button']} type="submit">
        로그인
      </button>
    </form>
  );
};
