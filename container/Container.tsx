import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Container.module.scss";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames(className, styles.container)}>{children}</div>
  );
}
