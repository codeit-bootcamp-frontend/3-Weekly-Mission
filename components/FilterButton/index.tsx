import { MouseEvent, ReactNode } from "react";
import styles from "./FilterButton.module.css";

interface FilterButtonProps {
  children: ReactNode;
  id?: number;
  handleButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const FilterButton = ({ children, id, handleButtonClick }: FilterButtonProps) => {
  return (
    <button onClick={handleButtonClick} className={styles.FilterButton} id={String(id)}>
      {children}
    </button>
  );
};

export default FilterButton;
