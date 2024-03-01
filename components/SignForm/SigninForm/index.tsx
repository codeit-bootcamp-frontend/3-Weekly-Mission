import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { ERROR_MESSAGES } from '@/constants/error';
import { EMAIL_REGEX } from '@/constants/regex';
import { postUserSignin } from '@/api/api';
import Image from 'next/image';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

export const SigninForm = () => {
  const [typeValue, setTypeValue] = useState<string>('password');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>({ mode: 'onBlur' });

  const onSubmit = async (data: FormValues) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await postUserSignin(data);
      const { accessToken, refreshToken } = response;
      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        router.push('/folder');
        return;
      }
      throw new Error('No Token');
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError?.response?.status === 400) {
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
      alert(ERROR_MESSAGES.SIGN_IN_FAILED);
      throw Error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleEyeIconClick = () => {
    setTypeValue(typeValue === 'password' ? 'text' : 'password');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <EmailInput register={register} errors={errors} />
      <PasswordInput
        register={register}
        errors={errors}
        typeValue={typeValue}
        handleEyeIconClick={handleEyeIconClick}
      />
      <button className={styles['submit-button']} type="submit">
        로그인
      </button>
    </form>
  );
};

// Email
interface EmailInputProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const EmailInput = ({ register, errors }: EmailInputProps) => (
  <div>
    <label htmlFor="sign-email">이메일</label>
    <div className={styles['input-box']}>
      <input
        className={`${styles.input} ${errors.email ? styles.error : null}`}
        type="email"
        id="sign-email"
        placeholder={ERROR_MESSAGES.EMAIL_REQUIRED}
        {...register('email', {
          required: ERROR_MESSAGES.EMAIL_REQUIRED,
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
);

// Password
interface PasswordInputProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  typeValue: string;
  handleEyeIconClick: () => void;
}

const PasswordInput = ({
  register,
  errors,
  typeValue,
  handleEyeIconClick,
}: PasswordInputProps) => (
  <div>
    <label htmlFor="sign-password">비밀번호</label>
    <div className={styles['input-box']}>
      <input
        className={`${styles.input} ${errors.password ? styles.error : null}`}
        type={typeValue}
        id="sign-password"
        placeholder={ERROR_MESSAGES.PASSWORD_REQUIRED}
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
);
