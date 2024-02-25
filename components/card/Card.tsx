import { ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
