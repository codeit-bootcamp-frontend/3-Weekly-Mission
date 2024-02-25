import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import InputWithErrorMsg from '@components/ui/atoms/input/input-with-error-msg/InputWithErrorMsg';
import styles from '@pages/signin/signform.module.css';

import { checkEmailDuplication } from '@api/sign/checkEmailDuplication';
import { signup } from '@api/sign/signup';

const cn = classNames.bind(styles);

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

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

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    getValues,
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const router = useRouter();

  const onSubmitHandler = async (d: Inputs) => {
    try {
      const res = await signup({ email: d.email, password: d.password });

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
          이미 회원이신가요?
          <Link className={cn('header-link')} href='/signin'>
            로그인 하기
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
                autoComplete='email'
                {...register('email', {
                  pattern: {
                    value: EMAIL_REGEX,
                    message: '올바른 이메일 주소가 아닙니다.',
                  },
                  required: {
                    value: true,
                    message: '이메일을 입력해주세요.',
                  },
                  onBlur: async () => {
                    if (!EMAIL_REGEX.test(getValues().email)) return;

                    try {
                      await checkEmailDuplication(getValues().email);
                    } catch {
                      setError('email', {
                        message: '이미 존재하는 이메일입니다.',
                      });
                    }
                  },
                })}
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
                placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
                srcOnPasswordType='/images/icon/eye-off.svg'
                srcOnTextType='/images/icon/eye-on.svg'
                autoComplete='current-password'
                {...register('password', {
                  pattern: {
                    value: PASSWORD_REGEX,
                    message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
                  },
                  required: {
                    value: true,
                    message: '비밀번호를 입력해주세요.',
                  },
                })}
              >
                <StErrorMsg>{errors.password?.message}</StErrorMsg>
              </InputWithErrorMsg>
            </div>
            <div className={cn('form-input-box')}>
              <label htmlFor='confirmPassword' className={cn('form-input-label')}>
                비밀번호 확인
              </label>
              <InputWithErrorMsg
                id='confirmPassword'
                type='password'
                isError={!!errors.confirmPassword}
                placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
                srcOnPasswordType='/images/icon/eye-off.svg'
                srcOnTextType='/images/icon/eye-on.svg'
                autoComplete='current-password'
                {...register('confirmPassword', {
                  required: {
                    value: true,
                    message: '비밀번호와 일치하는 값을 입력해 주세요.',
                  },
                  validate: (value) => value === getValues().password || '비밀번호가 일치하지 않습니다.',
                })}
              >
                <StErrorMsg>{errors.confirmPassword?.message}</StErrorMsg>
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

export default Signup;

const StErrorMsg = styled.p`
  color: var(--Linkbrary-red, #ff5b56);

  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;

  margin: 0;
`;
