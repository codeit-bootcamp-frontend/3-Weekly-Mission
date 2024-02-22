import SigninInput from '@/src/components/SigninInput/SigninInput';
import styles from '@/styles/signin.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import { postSignin } from './api/api';
import { useRouter } from 'next/router';

const cn = classNames.bind(styles);

export default function signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitError, setIsSubmitError] = useState(false);
  const router = useRouter();

  const onClickSignin = async () => {
    const response = await postSignin({ email, password });
    if (!response) return;

    if (response.ok) {
      const body = await response.json();
      localStorage.setItem('accessToken', body.data.accessToken);
      router.push('/folder');
    } else {
      setIsSubmitError(true);
    }
  };

  const handleOnKeydown = (e: KeyboardEvent) => {
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
            <div className={cn('input')}>
              <label className={cn('label')}>이메일</label>
              <SigninInput
                type="email"
                placeholder="이메일을 입력해 주세요."
                errorMessage={
                  isSubmitError
                    ? '이메일을 확인해 주세요.'
                    : '올바른 이메일 주소가 아닙니다.'
                }
                isSubmitError={isSubmitError}
                setIsSubmitError={setIsSubmitError}
                onChange={setEmail}
                onKeydown={handleOnKeydown}
              />
            </div>
            <div className={cn('input')}>
              <label className={cn('label')}>비밀번호</label>
              <SigninInput
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                errorMessage={isSubmitError ? '비밀번호를 확인해 주세요.' : ''}
                isSubmitError={isSubmitError}
                setIsSubmitError={setIsSubmitError}
                onChange={setPassword}
                onKeydown={handleOnKeydown}
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
