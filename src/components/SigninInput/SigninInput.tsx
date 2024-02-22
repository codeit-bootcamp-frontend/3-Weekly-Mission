import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './SigninInput.module.css';
import Image from 'next/image';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const EMAIL_CHECK = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]{2,}/;

const ERROR_MESSAGE = {
  emptyError: {
    email: '이메일을 입력해 주세요.',
    password: '비밀번호를 입력해 주세요.',
  },
  checkError: {
    email: '올바른 이메일 주소가 아닙니다.',
    password: '',
  },
  submitError: {
    email: '이메일을 확인해 주세요.',
    password: '비밀번호를 확인해 주세요.',
  },
};

interface Props {
  type: 'email' | 'password';
  placeholder: string;
  errorMessage: string;
  isSubmitError: boolean;
  setIsSubmitError: (value: boolean) => void;
  onChange: (value: string) => void;
  onKeydown: (value: KeyboardEvent) => void;
}

export default function SigninInput({
  type,
  placeholder,
  errorMessage,
  isSubmitError,
  setIsSubmitError,
  onChange,
  onKeydown,
}: Props) {
  const [emptyErrorMessage, setEmptyErrorMessage] = useState('');
  const [isHide, setIsHide] = useState(false);
  const [isCheckError, setIsCheckError] = useState(isSubmitError);

  const onClickIcon = (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;
    const inputElement =
      targetElement.previousElementSibling as HTMLInputElement;
    inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
    setIsHide(!isHide);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSubmitError(false);
    onChange(e.target.value);
  };

  const onBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setEmptyErrorMessage(ERROR_MESSAGE.emptyError[type]);
      setIsCheckError(true);
    } else if (type === 'email' && !EMAIL_CHECK.test(e.target.value)) {
      setEmptyErrorMessage('');
      setIsCheckError(true);
    } else {
      setEmptyErrorMessage('');
      setIsCheckError(false);
    }
  };

  useEffect(() => {
    setIsCheckError(isSubmitError);
  }, [isSubmitError]);

  return (
    <div className={cn('input-container')}>
      <input
        type={type}
        name={type}
        className={isCheckError ? cn('input', 'error') : cn('input')}
        placeholder={placeholder}
        onChange={onChangeInput}
        onBlur={onBlurInput}
        onKeyDown={onKeydown}
      />
      {type === 'password' &&
        (isHide ? (
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
        ))}
      {isCheckError && (
        <span className={cn('error-message')}>
          {emptyErrorMessage || errorMessage}
        </span>
      )}
    </div>
  );
}
