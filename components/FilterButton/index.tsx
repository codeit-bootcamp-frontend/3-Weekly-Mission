import { ReactNode } from "react";
import styles from "./FilterButton.module.css";

interface FilterButtonProps {
  children: ReactNode;
  id?: number;
}

const FilterButton = ({ children, id }: FilterButtonProps) => {
  return (
    <div className={styles.FilterButton} id={String(id)}>
      {children}
    </div>
  );
};

export default FilterButton;
