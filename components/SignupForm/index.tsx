import { useState } from 'react';
import { Input } from '@/components/Input';
import styles from './styles.module.css';

export const SignupForm = () => {
  const [emailInputValue, setemailInputValue] = useState<string>('');
  const [passwordInputValue, setPasswordInputValue] = useState<string>('');
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] =
    useState<string>('');

  return (
    <form className={styles.form}>
      <Input
        type="string"
        id="sign-email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
        inputValue={emailInputValue}
        setInputValue={setemailInputValue}
      />
      <Input
        type="password"
        id="sign-password"
        label="비밀번호"
        placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
        inputValue={passwordInputValue}
        setInputValue={setPasswordInputValue}
      />
      <Input
        type="password"
        id="sign-confirm-password"
        label="비밀번호 확인"
        placeholder="비밀번호와 일치하는 값을 입력해주세요."
        inputValue={confirmPasswordInputValue}
        setInputValue={setConfirmPasswordInputValue}
      />
      <button className={styles['submit-button']} type="button">
        회원가입
      </button>
    </form>
  );
};
