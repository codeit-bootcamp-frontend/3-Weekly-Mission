import React, { KeyboardEvent, MouseEvent, forwardRef, useState } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cn = classNames.bind(styles);

interface Props {
  type: string;
  isError: boolean;
  placeholder: string;
  onChange: (value: string) => void;
  onBlur: () => boolean;
  onKeyDown: (value: KeyboardEvent) => void;
  errorMessage: string;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    type,
    isError,
    placeholder,
    onChange,
    onBlur,
    onKeyDown,
    errorMessage,
  }: Props,
  ref
) {
  const [isHide, setIsHide] = useState(false);

  const onClickIcon = (e: MouseEvent) => {
    const targetElement = e.target as HTMLImageElement;
    const inputElement =
      targetElement.previousElementSibling as HTMLInputElement;
    inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
    setIsHide(!isHide);
  };

  return (
    <div className={cn('input-container')}>
      <input
        ref={ref}
        type={type}
        className={isError ? cn('input', 'error') : cn('input')}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
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
      {isError && <span className={cn('error-message')}>{errorMessage}</span>}
    </div>
  );
});

export default Input;
