import { ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
  type: string | null;
  children: ReactNode;
}

export const ModalSubmitButton = ({ type, children }: Props) => {
  return (
    <button
      className={`${styles.button} ${type ? styles[`${type}`] : styles.none}`}
      type="button"
    >
      {children}
    </button>
  );
};
