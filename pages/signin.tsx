import styles from '@/styles/signin.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { postSignin } from './api/api';
import { useRouter } from 'next/router';
import Input from '@/src/components/Input/Input';

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
    let focus = true;
    if (email === '') {
      setEmailErrorMessage('이메일을 입력해 주세요.');
      setIsEmailError(true);
    } else if (!EMAIL_CHECK.test(email)) {
      setEmailErrorMessage('올바른 이메일 주소가 아닙니다.');
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
      focus = false;
    }

    return focus;
  };

  const onBlurPassword = () => {
    let focus = true;
    if (password === '') {
      setPasswordErrorMessage('비밀번호를 입력해 주세요.');
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
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

  const onClickSignin = async () => {
    const inputList = {
      email: { target: emailInput.current, check: onBlurEmail() },
      password: { target: passwordInput.current, check: onBlurPassword() },
    };

    for (let input in inputList) {
      if (inputList[input].check) {
        inputList[input].target.focus();
        return;
      }
    }

    if (onBlurPassword() && passwordInput.current) {
      passwordInput.current.focus();
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
              <Input
                ref={emailInput}
                type="email"
                placeholder="이메일을 입력해 주세요."
                onChange={setEmail}
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
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                onChange={setPassword}
                onBlur={onBlurPassword}
                onKeyDown={onKeydown}
                isError={isPasswordError}
                errorMessage={passwordErrorMessage}
              />
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
