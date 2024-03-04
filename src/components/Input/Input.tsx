import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { Error } from '@/pages/signin';

const cn = classNames.bind(styles);

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error: Error;
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
  { error, suffixImage, ...rest }: Props,
  ref
) {
  return (
    <div className={cn('input-container')}>
      <input
        ref={ref}
        className={error.isError ? cn('input', 'error') : cn('input')}
        {...rest}
      />
      {suffixImage && (
        <Image {...suffixImage} className={cn(suffixImage.className)} />
      )}
      {error.isError && (
        <span className={cn('error-message')}>{error.message}</span>
      )}
    </div>
  );
});

export default Input;
