import styles from './styles.module.css';

export const Modal = ({
  title,
  handleCloseModal,
  children,
  subTitle = undefined,
}) => {
  const onClick = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal(e);
    }
  };

  return (
    <>
      <div className={styles.container} onClick={onClick}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>{title}</h1>
            {subTitle && <h2>{subTitle}</h2>}
          </div>
          <button
            className={styles['close-button']}
            onClick={e => handleCloseModal(e)}
          >
            <img src="/images/close.png" alt="닫기 버튼" />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
