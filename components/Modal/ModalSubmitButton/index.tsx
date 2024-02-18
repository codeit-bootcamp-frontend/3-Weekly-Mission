import { ReactNode } from 'react';
import styles from './styles.module.css';

export const ModalSubmitButton = ({
  type,
  children,
}: {
  type: string | null;
  children: ReactNode;
}) => {
  return (
    <button
      className={`${styles.button} ${type ? styles[`${type}`] : styles.none}`}
    >
      {children}
    </button>
  );
};
