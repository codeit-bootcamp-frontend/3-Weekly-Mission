import { useState } from 'react';
import styles from './InputText.module.css';

const InputText = () => {
  const [errMsg, setErrMsg] = useState('');

  function focusOut() {
    // 포커스아웃시 실행할 이벤트
  }

  function errCheck() {
    setErrMsg('내용을 다시 작성해 주세요');
  }

  function errOut() {
    setErrMsg('');
  }

  return (
    <>
      <input
        type="text"
        placeholder="내용 입력"
        className={`${styles.input} ${errMsg !== '' ? styles.err : ''}`}
        onBlur={focusOut}
        onChange={errOut}
      />
      <h6 className={styles.err}>{errMsg}</h6>
      <button onClick={errCheck}>제출</button>
    </>
  );
};

export default InputText;
