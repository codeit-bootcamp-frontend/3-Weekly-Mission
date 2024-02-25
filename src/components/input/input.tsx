import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cn = classNames.bind(styles);

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  errorMessage: string;
  suffixImage?: {
    width: number;
    height: number;
    className: string;
    src: string;
    alt: string;
    onClick: () => void;
  };
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { isError, errorMessage, suffixImage, ...rest }: Props,
  ref
) {
  return (
    <div className={cn('input-container')}>
      <input
        ref={ref}
        className={isError ? cn('input', 'error') : cn('input')}
        {...rest}
      />
      {suffixImage && (
        <Image {...suffixImage} className={cn(suffixImage.className)} />
      )}
      {isError && <span className={cn('error-message')}>{errorMessage}</span>}
    </div>
  );
});

export default Input;
