import { useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';

interface Props {
  type: string;
  id?: string;
  label?: string;
  placeholder?: string;
}

export const Input = ({ type = 'password', id, label, placeholder }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isError, setIsError] = useState(false);
  const [typeValue, setTypeValue] = useState<string>(type);

  const handleInputBlur = () => {
    setIsError(!inputValue);
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
          onChange={e => {
            setInputValue(e.target.value);
          }}
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
      {isError && (
        <p className={styles['error-message']}>내용을 다시 작성해주세요</p>
      )}
    </div>
  );
};
