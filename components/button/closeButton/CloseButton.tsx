import classNames from "classnames";
import styles from "./CloseButton.module.scss";
import Image from "next/image";

type buttonProps = {
  className: string;
  onClick: () => void;
};

function CloseButton({ className, onClick }: buttonProps) {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      <Image src="/assets/close.svg" alt="닫기 버튼" fill />
    </button>
  );
}

export default CloseButton;
