import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  forwardRef,
} from 'react';
import styles from './style.module.css';
import Image from 'next/image';

interface Props {
  type: string;
  id?: string;
  label?: string;
  placeholder?: string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  handleInputBlur?: () => void;
  isError?: boolean;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      type = 'password',
      id,
      label,
      placeholder,
      inputValue,
      setInputValue,
      handleInputBlur,
      isError,
      errorMessage,
    },
    ref, // ref 추가
  ) => {
    const [typeValue, setTypeValue] = useState<string>(type);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleEyeIconClick = () => {
      setTypeValue(typeValue === 'password' ? 'text' : 'password');
    };

    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <div className={styles['input-box']}>
          <input
            ref={ref}
            className={`${styles.input} ${isError ? styles.error : ''}`}
            type={typeValue}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            id={id}
          />
          {type === 'password' && (
            <Image
              className={styles['eye-icon']}
              width={16}
              height={16}
              src={
                typeValue === 'password'
                  ? '/images/eye-off.svg'
                  : '/images/eye-on.svg'
              }
              alt="비밀번호 가리기"
              onClick={handleEyeIconClick}
            />
          )}
        </div>
        {isError && <p className={styles['error-message']}>{errorMessage}</p>}
      </div>
    );
  },
);
