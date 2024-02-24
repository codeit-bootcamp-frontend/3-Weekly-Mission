import { useState } from 'react';
import styles from './InputPassword.module.css';
import eyeOn from '@/public/eye-on.svg';
import eyeOff from '@/public/eye-off.svg';
import Image from 'next/image';

const InputPassword = () => {
  const [isText, setIsText] = useState('text');
  const [eyeIcon, setEyeIcon] = useState(eyeOn);

  function eyeChange(): void {
    if (eyeIcon === eyeOn) {
      setEyeIcon(eyeOff);
      setIsText('password');
    } else {
      setEyeIcon(eyeOn);
      setIsText('text');
    }
  }

  return (
    <label className={styles.label}>
      <input type={isText} className={`${styles.input}`} />
      <Image
        src={eyeIcon}
        alt="eye-icon"
        className={styles.eye}
        onClick={eyeChange}
      />
    </label>
  );
};

export default InputPassword;
