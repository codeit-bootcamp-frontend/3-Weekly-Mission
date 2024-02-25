import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import InputWithErrorMsg from '@components/ui/atoms/input/input-with-error-msg/InputWithErrorMsg';

import { signin } from '@api/sign/signin';

import styles from './signform.module.css';

const cn = classNames.bind(styles);

type Inputs = {
  email: string;
  password: string;
};

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const inputs = [
  {
    name: 'email',
    message: '이메일을 확인해주세요.',
  },
  {
    name: 'password',
    message: '비밀번호를 확인해주세요.',
  },
] as const;

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const onSubmitHandler = async (d: Inputs) => {
    try {
      const res = await signin({ email: d.email, password: d.password });

      if (!(res instanceof Error)) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        reset();
        router.push('/folder');
      }
    } catch {
      inputs.forEach(({ name, message }) => {
        setError(name, {
          message,
        });
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
  }, [router]);

  return (
    <div id='wrap' className={cn('wrap')}>
      <header className={cn('header')}>
        <Link href='/'>
          <Image
            width={210}
            height={38}
            className={cn('logo')}
            alt='Linkbrary logo linked to home'
            src='/images/logo/landing-logo.svg'
          />
        </Link>
        <p className={cn('header-message')}>
          회원이 아니신가요?
          <Link className={cn('header-link')} href='/signup'>
            회원 가입하기
          </Link>
        </p>
      </header>
      <section className={cn('container')}>
        <form
          noValidate
          className={cn('form')}
          method='post'
          data-sign-mode='signin'
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className={cn('input-area')}>
            <div className={cn('form-input-box')}>
              <label htmlFor='email' className={cn('form-input-label')}>
                이메일
              </label>
              <InputWithErrorMsg
                id='email'
                type='email'
                isError={!!errors.email}
                placeholder='이메일을 입력해주세요.'
                {...register('email', {
                  pattern: {
                    value: EMAIL_REGEX,
                    message: '올바른 이메일 주소가 아닙니다.',
                  },
                  required: {
                    value: true,
                    message: '이메일을 입력해주세요.',
                  },
                })}
                autoComplete='email'
              >
                <StErrorMsg>{errors.email?.message}</StErrorMsg>
              </InputWithErrorMsg>
            </div>
            <div className={cn('form-input-box')}>
              <label htmlFor='password' className={cn('form-input-label')}>
                비밀번호
              </label>
              <InputWithErrorMsg
                id='password'
                type='password'
                isError={!!errors.password}
                placeholder='비밀번호를 입력해 주세요.'
                srcOnPasswordType='/images/icon/eye-off.svg'
                srcOnTextType='/images/icon/eye-on.svg'
                {...register('password', {
                  required: {
                    value: true,
                    message: '비밀번호를 입력해주세요.',
                  },
                })}
                autoComplete='current-password'
              >
                <StErrorMsg>{errors.password?.message}</StErrorMsg>
              </InputWithErrorMsg>
            </div>
          </div>
          <button disabled={isSubmitting} type='submit' className={cn('form-submit-btn')}>
            로그인
          </button>
        </form>
        <div className={cn('social-media-area')}>
          <span className={cn('social-media-area-text')}>소셜 로그인</span>
          <ul className={cn('social-media-link-box')}>
            <li>
              <a className={cn('social-media-link')} href='https://www.google.com/'>
                <Image fill alt='구글 로그인 바로가기 아이콘' src='/images/site-map/google.svg' />
              </a>
            </li>
            <li>
              <a className={cn('social-media-link')} href='https://www.kakaocorp.com/page/'>
                <Image fill alt='카카오 로그인 바로가기 아이콘' src='/images/site-map/kakao.svg' />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Signin;

const StErrorMsg = styled.p`
  color: var(--Linkbrary-red, #ff5b56);

  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;

  margin: 0;
`;
