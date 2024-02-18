import { useState } from 'react';
import styles from './InputPassword.module.css';
import eyeOn from '@/public/eye-on.svg';
import eyeOff from '@/public/eye-off.svg';
import Image from 'next/image';

const InputPassword = () => {
  const [isText, setIsText] = useState('text');
  const [eye, setEye] = useState(eyeOn);

  function eyeChange() {
    if (eye === eyeOn) {
      setEye(eyeOff);
      setIsText('password');
    } else {
      setEye(eyeOn);
      setIsText('text');
    }
  }

  return (
    <label className={styles.label}>
      <input type={isText} className={`${styles.input}`} />
      <Image src={eye} alt="eye" className={styles.eye} onClick={eyeChange} />
    </label>
  );
};

export default InputPassword;
