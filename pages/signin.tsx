import Input from '@/src/components/Input/Input';
import styles from '@/styles/signin.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { KeyboardEvent, MouseEvent, useState } from 'react';
import { postSignin } from './api/api';
import { useRouter } from 'next/router';

const cn = classNames.bind(styles);

export type InputType = 'email' | 'password';

export interface User {
  email: string;
  password: string;
}

export default function signin() {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const router = useRouter();

  const handleOnChangeInput = (type: InputType, value: string) => {
    setUser((preUser) => ({ ...preUser, [type]: value }));
  };

  const onClickSignin = async (e: MouseEvent) => {
    const response = await postSignin(user);
    if (!response) return;

    if (response.ok) {
      router.push('/folder');
    }
  };

  const onKeypress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
    }
  };

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
              <Input type="email" onChange={handleOnChangeInput} />
            </div>
            <div className={cn('input')}>
              <label className={cn('label')}>비밀번호</label>
              <Input type="password" onChange={handleOnChangeInput} />
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
