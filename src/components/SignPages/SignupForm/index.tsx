import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { ERROR_MESSAGES } from '@/constants/error';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/regex';
import { postDuplicateEmail, postUserSignup } from '@/api/postSignData';
import Image from 'next/image';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Cookies from 'js-cookie';

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignupForm = () => {
  const [passwordTypeValue, setPasswordTypeValue] =
    useState<string>('password');
  const [confirmPasswordTypeValue, setConfirmPasswordTypeValue] =
    useState<string>('password');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
    getValues,
  } = useForm<FormValues>({ mode: 'onBlur' });

  const checkEmailDuplicate = async () => {
    if (isLoading) {
      return;
    }
    const email = getValues('email');
    setIsLoading(true);
    try {
      await postDuplicateEmail(email);
      clearErrors('email');
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError?.response?.status === 409) {
        setError('email', {
          type: 'custom',
          message: ERROR_MESSAGES.DUPLICATE_EMAIL,
        });
        return;
      }
      throw Error;
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const { accessToken, refreshToken } = await postUserSignup(data);
      Cookies.set('accessToken', accessToken, { expires: 1 });
      Cookies.set('refreshToken', refreshToken, { expires: 7 });
      router.push('/folder');
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
        setError('confirmPassword', {
          type: 'custom',
          message: ERROR_MESSAGES.CONFIRM_PASSWORD_CHECK_FAILED,
        });
        return;
      }
      alert(ERROR_MESSAGES.SIGN_UP_FAILED);
      throw Error;
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordEyeIconClick = () => {
    setPasswordTypeValue(
      passwordTypeValue === 'password' ? 'text' : 'password',
    );
  };

  const handleConfirmPasswordEyeIconClick = () => {
    setConfirmPasswordTypeValue(
      confirmPasswordTypeValue === 'password' ? 'text' : 'password',
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <EmailInput
        register={register}
        errors={errors}
        checkEmailDuplicate={checkEmailDuplicate}
      />
      <PasswordInput
        register={register}
        errors={errors}
        passwordTypeValue={passwordTypeValue}
        handlePasswordEyeIconClick={handlePasswordEyeIconClick}
      />
      <ConfirmPasswordInput
        register={register}
        errors={errors}
        confirmPasswordTypeValue={confirmPasswordTypeValue}
        handleConfirmPasswordEyeIconClick={handleConfirmPasswordEyeIconClick}
        watch={watch}
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
  checkEmailDuplicate: () => Promise<void>;
}

const EmailInput = ({
  register,
  errors,
  checkEmailDuplicate,
}: EmailInputProps) => (
  <div>
    <label htmlFor="sign-email">이메일</label>
    <div className={styles['input-box']}>
      <input
        className={`${styles.input} ${errors.email ? styles.error : ''}`}
        type="email"
        id="sign-email"
        placeholder={ERROR_MESSAGES.EMAIL_REQUIRED}
        {...register('email', {
          required: ERROR_MESSAGES.EMAIL_REQUIRED,
          pattern: {
            value: EMAIL_REGEX,
            message: ERROR_MESSAGES.INVALID_EMAIL,
          },
          onBlur: checkEmailDuplicate,
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
  passwordTypeValue: string;
  handlePasswordEyeIconClick: () => void;
}

const PasswordInput = ({
  register,
  errors,
  passwordTypeValue,
  handlePasswordEyeIconClick,
}: PasswordInputProps) => (
  <div>
    <label htmlFor="sign-password">비밀번호</label>
    <div className={styles['input-box']}>
      <input
        className={`${styles.input} ${errors.password ? styles.error : ''}`}
        type={passwordTypeValue}
        id="sign-password"
        placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
        {...register('password', {
          required: ERROR_MESSAGES.PASSWORD_REQUIRED,
          pattern: {
            value: PASSWORD_REGEX,
            message: ERROR_MESSAGES.INVALID_PASSWORD,
          },
          minLength: {
            value: 8,
            message: ERROR_MESSAGES.INVALID_PASSWORD,
          },
        })}
      />
      <Image
        className={styles['eye-icon']}
        width={16}
        height={16}
        src={
          passwordTypeValue === 'password'
            ? '/images/eye-off.svg'
            : '/images/eye-on.svg'
        }
        alt="눈 모양 아이콘"
        onClick={handlePasswordEyeIconClick}
      />
    </div>
    {errors.password && (
      <p className={styles['error-message']}>{errors.password.message}</p>
    )}
  </div>
);

// Confirm Password
interface ConfirmPasswordInputProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  confirmPasswordTypeValue: string;
  handleConfirmPasswordEyeIconClick: () => void;
  watch: (field: keyof FormValues) => string;
}

const ConfirmPasswordInput = ({
  register,
  errors,
  confirmPasswordTypeValue,
  handleConfirmPasswordEyeIconClick,
  watch,
}: ConfirmPasswordInputProps) => (
  <div>
    <label htmlFor="sign-confirm-password">비밀번호 확인</label>
    <div className={styles['input-box']}>
      <input
        className={`${styles.input} ${errors.confirmPassword ? styles.error : ''}`}
        type={confirmPasswordTypeValue}
        id="sign-confirm-password"
        placeholder="비밀번호와 일치하는 값을 입력해 주세요."
        {...register('confirmPassword', {
          required: ERROR_MESSAGES.CONFIRM_PASSWORD_REQUIRED,
          validate: (value) =>
            value === watch('password') ||
            ERROR_MESSAGES.INVALID_CONFIRM_PASSWORD,
        })}
      />
      <Image
        className={styles['eye-icon']}
        width={16}
        height={16}
        src={
          confirmPasswordTypeValue === 'password'
            ? '/images/eye-off.svg'
            : '/images/eye-on.svg'
        }
        alt="눈 모양 아이콘"
        onClick={handleConfirmPasswordEyeIconClick}
      />
    </div>
    {errors.confirmPassword && (
      <p className={styles['error-message']}>
        {errors.confirmPassword.message}
      </p>
    )}
  </div>
);
