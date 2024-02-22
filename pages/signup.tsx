import styles from '@/styles/signup.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { checkEmail, postSignup } from './api/api';

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
  const [isHide, setIsHide] = useState(false);

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
    let focus = true;
    if (email === '') {
      setEmailErrorMessage('이메일을 입력해 주세요.');
      setIsEmailError(true);
    } else if (!EMAIL_CHECK.test(email)) {
      setEmailErrorMessage('올바른 이메일 주소가 아닙니다.');
      setIsEmailError(true);
    } else {
      checkEmailDuplicate();
      if (!isEmailError) {
        focus = false;
      }
    }

    return focus;
  };

  const onBlurPassword = () => {
    let focus = true;
    if (!PASSWORD_CHECK.test(password)) {
      setPasswordErrorMessage(
        '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
      );
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
      focus = false;
    }

    return focus;
  };

  const onBlurPasswordCheck = () => {
    let focus = true;
    if (passwordCheck !== password) {
      setPasswordCheckErrorMessage('비밀번호가 일치하지 않아요.');
      setIsPasswordCheckError(true);
    } else {
      setIsPasswordCheckError(false);
      focus = false;
    }

    return focus;
  };

  const onClickIcon = (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;
    const inputElement =
      targetElement.previousElementSibling as HTMLInputElement;
    inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
    setIsHide(!isHide);
  };

  const onClickSignup = async () => {
    const inputList = {
      email: { target: emailInput.current, check: onBlurEmail() },
      password: { target: passwordInput.current, check: onBlurPassword() },
      passwordCheck: {
        target: passwordCheckInput.current,
        check: onBlurPasswordCheck(),
      },
    };

    setTimeout(() => {
      for (let input in inputList) {
        if (inputList[input].check) {
          inputList[input].target.focus();
          return;
        }
      }
    }, 100);

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
        <article className={cn('article-signup')}>
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
              <div className={cn('input-container')}>
                <input
                  ref={emailInput}
                  type="email"
                  name="email"
                  className={isEmailError ? cn('input', 'error') : cn('input')}
                  placeholder="이메일을 입력해 주세요."
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={onBlurEmail}
                  onKeyDown={onKeydown}
                />
                {isEmailError && (
                  <span className={cn('error-message')}>
                    {emailErrorMessage}
                  </span>
                )}
              </div>
            </div>
            <div className={cn('input-element')}>
              <label className={cn('label')}>비밀번호</label>
              <div className={cn('input-container')}>
                <input
                  ref={passwordInput}
                  type="password"
                  name="password"
                  className={
                    isPasswordError ? cn('input', 'error') : cn('input')
                  }
                  placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={onBlurPassword}
                  onKeyDown={onKeydown}
                />
                {isHide ? (
                  <Image
                    width={16}
                    height={16}
                    className={cn('password-icon')}
                    src="/images/eye-on.svg"
                    alt="눈모양 아이콘"
                    onClick={onClickIcon}
                  />
                ) : (
                  <Image
                    width={16}
                    height={16}
                    className={cn('password-icon')}
                    src="/images/eye-off.svg"
                    alt="눈에 빗금친 아이콘"
                    onClick={onClickIcon}
                  />
                )}
                {isPasswordError && (
                  <span className={cn('error-message')}>
                    {passwordErrorMessage}
                  </span>
                )}
              </div>
            </div>
            <div className={cn('input-element')}>
              <label className={cn('label')}>비밀번호 확인</label>
              <div className={cn('input-container')}>
                <input
                  ref={passwordCheckInput}
                  type="password"
                  name="passwordCheck"
                  className={
                    isPasswordCheckError ? cn('input', 'error') : cn('input')
                  }
                  placeholder="비밀번호와 일치하는 값을 입력해 주세요."
                  onChange={(e) => setPasswordCheck(e.target.value)}
                  onBlur={onBlurPasswordCheck}
                  onKeyDown={onKeydown}
                />
                {isHide ? (
                  <Image
                    width={16}
                    height={16}
                    className={cn('password-icon')}
                    src="/images/eye-on.svg"
                    alt="눈모양 아이콘"
                    onClick={onClickIcon}
                  />
                ) : (
                  <Image
                    width={16}
                    height={16}
                    className={cn('password-icon')}
                    src="/images/eye-off.svg"
                    alt="눈에 빗금친 아이콘"
                    onClick={onClickIcon}
                  />
                )}
                {isPasswordCheckError && (
                  <span className={cn('error-message')}>
                    {passwordCheckErrorMessage}
                  </span>
                )}
              </div>
            </div>
          </section>
          <button
            type="button"
            className={cn('signup-button')}
            onClick={onClickSignup}
          >
            회원가입
          </button>
        </article>
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
