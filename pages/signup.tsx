import styles from '@/styles/signup.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { checkEmail, postSignup } from './api/api';
import Input from '@/src/components/Input/Input';

const cn = classNames.bind(styles);

const EMAIL_CHECK = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]{2,}/;
const PASSWORD_CHECK = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,}$/;

export default function signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordCheckErrorMessage, setPasswordCheckErrorMessage] =
    useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isPasswordCheckError, setIsPasswordCheckError] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordCheck, setIsShowPasswordCheck] = useState(false);

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const passwordCheckInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const checkEmailDuplicate = async () => {
    const response = await checkEmail({ email });
    if (response.error) {
      setEmailErrorMessage('이미 사용 중인 이메일입니다.');
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
  };

  const onBlurEmail = () => {
    let valueError = true;
    if (email === '') {
      setEmailErrorMessage('이메일을 입력해 주세요.');
      setIsEmailError(true);
    } else if (!EMAIL_CHECK.test(email)) {
      setEmailErrorMessage('올바른 이메일 주소가 아닙니다.');
      setIsEmailError(true);
    } else {
      checkEmailDuplicate();
      if (!isEmailError) {
        valueError = false;
      }
    }

    return valueError;
  };

  const onBlurPassword = () => {
    let valueError = true;
    if (!PASSWORD_CHECK.test(password)) {
      setPasswordErrorMessage(
        '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
      );
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
      valueError = false;
    }

    return valueError;
  };

  const onBlurPasswordCheck = () => {
    let valueError = true;
    if (passwordCheck !== password) {
      setPasswordCheckErrorMessage('비밀번호가 일치하지 않아요.');
      setIsPasswordCheckError(true);
    } else {
      setIsPasswordCheckError(false);
      valueError = false;
    }

    return valueError;
  };

  const onClickSignup = () => {
    const inputList = {
      email: { target: emailInput.current, check: onBlurEmail() },
      password: { target: passwordInput.current, check: onBlurPassword() },
      passwordCheck: {
        target: passwordCheckInput.current,
        check: onBlurPasswordCheck(),
      },
    };

    setTimeout(async () => {
      for (let input in inputList) {
        if (inputList[input].check) {
          inputList[input].target.focus();
          return;
        }
      }

      const response = await postSignup({ email, password });
      if (!response) return;

      if (response.ok) {
        const body = await response.json();
        localStorage.setItem('accessToken', body.data.accessToken);
        router.push('/folder');
      } else {
        onBlurEmail();
        onBlurPassword();
        onBlurPasswordCheck();
      }
    }, 100);
  };

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClickSignup();
    }
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
  }, []);

  return (
    <div className={cn('background')}>
      <div className={cn('container')}>
        <form className={cn('form-signup')}>
          <header className={cn('header')}>
            <Link href="/">
              <div className={cn('logo')}>
                <Image
                  fill
                  src="/images/logo.svg"
                  alt="Linkbrary 로고"
                  priority={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className={cn('goto-signin')}>
              <span>이미 회원이신가요?</span>
              <Link href="/signin" className={cn('link')}>
                로그인 하기
              </Link>
            </div>
          </header>
          <section className={cn('section')}>
            <div className={cn('input-element')}>
              <label className={cn('label')}>이메일</label>
              <Input
                ref={emailInput}
                type="email"
                placeholder="이메일을 입력해 주세요"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={onBlurEmail}
                onKeyDown={onKeydown}
                isError={isEmailError}
                errorMessage={emailErrorMessage}
              />
            </div>
            <div className={cn('input-element')}>
              <label className={cn('label')}>비밀번호</label>
              <Input
                ref={passwordInput}
                type={isShowPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
                onBlur={onBlurPassword}
                onKeyDown={onKeydown}
                isError={isPasswordError}
                errorMessage={passwordErrorMessage}
                suffixImage={{
                  width: 16,
                  height: 16,
                  className: 'password-icon',
                  src: isShowPassword
                    ? '/images/eye-on.svg'
                    : '/images/eye-off.svg',
                  alt: isShowPassword ? '눈모양 아이콘' : '눈에 빗금친 아이콘',
                  onClick: () => setIsShowPassword(!isShowPassword),
                }}
              />
            </div>
            <div className={cn('input-element')}>
              <label className={cn('label')}>비밀번호 확인</label>
              <Input
                ref={passwordCheckInput}
                type={isShowPasswordCheck ? 'text' : 'password'}
                placeholder="비밀번호와 일치하는 값을 입력해 주세요."
                onChange={(e) => setPasswordCheck(e.target.value)}
                onBlur={onBlurPasswordCheck}
                onKeyDown={onKeydown}
                isError={isPasswordCheckError}
                errorMessage={passwordCheckErrorMessage}
                suffixImage={{
                  width: 16,
                  height: 16,
                  className: 'password-icon',
                  src: isShowPassword
                    ? '/images/eye-on.svg'
                    : '/images/eye-off.svg',
                  alt: isShowPassword ? '눈모양 아이콘' : '눈에 빗금친 아이콘',
                  onClick: () => setIsShowPassword(!isShowPassword),
                }}
              />
            </div>
          </section>
          <button
            type="button"
            className={cn('signup-button')}
            onClick={onClickSignup}
          >
            회원가입
          </button>
        </form>
        <footer className={cn('footer')}>
          <span>다른 방식으로 가입하기</span>
          <div className={cn('social-icons')}>
            <Link href="https://www.google.com">
              <Image
                width={42}
                height={42}
                src="/images/google.png"
                alt="구글 아이콘"
              />
            </Link>
            <Link href="https://www.kakaocorp.com/page">
              <Image
                width={42}
                height={42}
                src="/images/kakaotalk.png"
                alt="카카오톡 아이콘"
              />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
