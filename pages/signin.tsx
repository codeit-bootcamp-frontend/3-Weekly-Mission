import styles from '@/styles/signin.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { postSignin } from './api/api';
import { useRouter } from 'next/router';

const cn = classNames.bind(styles);

const EMAIL_CHECK = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]{2,}/;

export default function signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const onBlurEmail = () => {
    if (email === '') {
      setEmailErrorMessage('이메일을 입력해 주세요.');
      setIsEmailError(true);
    } else if (!EMAIL_CHECK.test(email)) {
      setEmailErrorMessage('올바른 이메일 주소가 아닙니다.');
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
  };

  const onBlurPassword = () => {
    if (password === '') {
      setPasswordErrorMessage('비밀번호를 입력해 주세요.');
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
  };

  const onClickIcon = (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;
    const inputElement =
      targetElement.previousElementSibling as HTMLInputElement;
    inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
    setIsHide(!isHide);
  };

  const onClickSignin = async () => {
    if (!EMAIL_CHECK.test(email)) {
      if (email === '') {
        setEmailErrorMessage('이메일을 입력해 주세요.');
        setIsEmailError(true);
      } else {
        setEmailErrorMessage('올바른 이메일 주소가 아닙니다.');
        setIsEmailError(true);
      }

      if (emailInput.current) {
        emailInput.current.focus();
      }
      return;
    }

    if (password === '') {
      setPasswordErrorMessage('비밀번호를 입력해 주세요.');
      setIsPasswordError(true);
      if (passwordInput.current) {
        passwordInput.current.focus();
      }
      return;
    }

    const response = await postSignin({ email, password });
    if (!response) return;

    if (response.ok) {
      const body = await response.json();
      localStorage.setItem('accessToken', body.data.accessToken);
      router.push('/folder');
    } else {
      setEmailErrorMessage('이메일을 확인해 주세요.');
      setIsEmailError(true);
      setPasswordErrorMessage('비밀번호를 확인해 주세요.');
      setIsPasswordError(true);
    }
  };

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClickSignin();
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
        <article className={cn('article-signin')}>
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
            <div className={cn('goto-signup')}>
              <span>회원이 아니신가요?</span>
              <Link href="/signup" className={cn('link')}>
                회원 가입하기
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
                  placeholder="비밀번호를 입력해 주세요."
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
          </section>
          <button
            type="button"
            className={cn('signin-button')}
            onClick={onClickSignin}
          >
            로그인
          </button>
        </article>
        <footer className={cn('footer')}>
          <span>소셜 로그인</span>
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
