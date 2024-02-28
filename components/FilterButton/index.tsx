import { MouseEvent, ReactNode } from "react";
import styles from "./FilterButton.module.css";

interface FilterButtonProps {
  children: ReactNode;
  id?: number;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const FilterButton = ({ children, id, onClick }: FilterButtonProps) => {
  return (
    <button onClick={onClick} className={styles.FilterButton} id={String(id)}>
      {children}
    </button>
  );
};

export default FilterButton;
