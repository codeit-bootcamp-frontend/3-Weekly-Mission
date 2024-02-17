import styles from './styles.module.css';

export const ModalSubmitButton = ({ type, children }) => {
  return (
    <button
      className={`${styles.button} ${type ? styles[`${type}`] : styles.none}`}
    >
      {children}
    </button>
  );
};
