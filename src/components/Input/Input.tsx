import { ChangeEvent, FocusEvent, MouseEvent, useState } from 'react';
import styles from './Input.module.css';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { InputType } from '@/pages/signin';

const cn = classNames.bind(styles);

interface Props {
  type: InputType;
  onChange: (type: InputType, value: string) => void;
}

const CHECK_EMAIL = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]{2,}/;
const CHECK_PASSWORD = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,}$/;

const CHECK = {
  email: CHECK_EMAIL,
  password: CHECK_PASSWORD,
};

export default function Input({ type, onChange }: Props) {
  const [isHide, setIsHide] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickIcon = (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;
    const inputElement =
      targetElement.previousElementSibling as HTMLInputElement;
    inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
    setIsHide(!isHide);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(type, e.target.value);

  const onBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    if (!CHECK[type].test(e.target.value)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <div className={cn('input-container')}>
      <input
        type={type}
        name={type}
        className={isError ? cn('input', 'error') : cn('input')}
        placeholder="내용 입력"
        onChange={onChangeInput}
        onBlur={onBlurInput}
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
      {isError && (
        <span className={cn('error-message')}>내용을 다시 작성해주세요</span>
      )}
    </div>
  );
}
