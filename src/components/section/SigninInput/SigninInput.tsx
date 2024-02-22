import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useState,
} from 'react';
import styles from './SigninInput.module.css';
import Image from 'next/image';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  type: string;
  check?: RegExp;
  errorMessage?: string;
  placeholder: string;
  isSubmitError: boolean;
  setIsSubmitError: (value: boolean) => void;
  onChange: (value: string) => void;
  onKeydown: (value: KeyboardEvent) => void;
}

export default function Input({
  type,
  check,
  errorMessage,
  placeholder,
  isSubmitError,
  setIsSubmitError,
  onChange,
  onKeydown,
}: Props) {
  const [isHide, setIsHide] = useState(false);
  const [isCheckError, setIsCheckError] = useState(false);

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
    if (check && !check.test(e.target.value)) {
      setIsCheckError(true);
    } else {
      setIsCheckError(false);
    }
  };

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
        <span className={cn('error-message')}>{errorMessage}</span>
      )}
    </div>
  );
}
