import { MouseEvent, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: (e?: MouseEvent<HTMLButtonElement | MouseEvent>) => void;
  type?: "button" | "submit";
};

function Button({
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
