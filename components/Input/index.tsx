import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
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

export const Input = ({
  type = 'password',
  id,
  label,
  placeholder,
  inputValue,
  setInputValue,
  handleInputBlur,
  isError,
  errorMessage,
}: Props) => {
  const [typeValue, setTypeValue] = useState<string>(type);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEyeIconClick = () => {
    if (typeValue === 'password') {
      setTypeValue('string');
    } else {
      setTypeValue('password');
    }
  };

  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <div className={styles['input-box']}>
        <input
          className={`${styles.input} ${isError ? styles.error : null}`}
          type={typeValue}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          id={id}
        />
        {type === 'password' ? (
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
        ) : null}
      </div>
      {isError ? (
        <p className={styles['error-message']}>{errorMessage}</p>
      ) : null}
    </div>
  );
};
