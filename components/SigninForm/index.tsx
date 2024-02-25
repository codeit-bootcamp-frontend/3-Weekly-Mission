import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { ERROR_MESSAGES, EMAIL_REGEX } from '@/constants/constants';
import { postUserSignin } from '@/api/api';
import Image from 'next/image';
import { useState } from 'react';

type FormValues = {
  email: string;
  password: string;
};

export const SigninForm = () => {
  const [typeValue, setTypeValue] = useState<string>('password');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>({ mode: 'onBlur' });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await postUserSignin(data);

      if (!response) {
        setError('email', {
          type: 'custom',
          message: ERROR_MESSAGES.EMAIL_CHECK_FAILED,
        });
        setError('password', {
          type: 'custom',
          message: ERROR_MESSAGES.PASSWORD_CHECK_FAILED,
        });
        return;
      }

      const { accessToken, refreshToken } = response;

      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        router.push('/folder');
      } else {
        throw new Error('No Token');
      }
    } catch (error) {
      alert(ERROR_MESSAGES.SIGN_IN_FAILED);
      console.error(error);
    }
  };

  const handleEyeIconClick = () => {
    setTypeValue(typeValue === 'password' ? 'text' : 'password');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="sign-email">이메일</label>
        <div className={styles['input-box']}>
          <input
            className={`${styles.input} ${errors.email ? styles.error : null}`}
            type="email"
            id="sign-email"
            placeholder="이메일을 입력해주세요."
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: EMAIL_REGEX,
                message: ERROR_MESSAGES.INVALID_EMAIL,
              },
            })}
          />
        </div>
        {errors.email ? (
          <p className={styles['error-message']}>{errors.email.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="sign-password">비밀번호</label>
        <div className={styles['input-box']}>
          <input
            className={`${styles.input} ${errors.password ? styles.error : null}`}
            type={typeValue}
            id="sign-password"
            placeholder="비밀번호를 입력해주세요."
            {...register('password', {
              required: ERROR_MESSAGES.PASSWORD_REQUIRED,
            })}
          />
          <Image
            className={styles['eye-icon']}
            width={16}
            height={16}
            src={
              typeValue === 'password'
                ? '/images/eye-off.svg'
                : '/images/eye-on.svg'
            }
            alt="눈 모양 아이콘"
            onClick={handleEyeIconClick}
          />
        </div>
        {errors.password ? (
          <p className={styles['error-message']}>{errors.password.message}</p>
        ) : null}
      </div>
      <button className={styles['submit-button']} type="submit">
        로그인
      </button>
    </form>
  );
};
