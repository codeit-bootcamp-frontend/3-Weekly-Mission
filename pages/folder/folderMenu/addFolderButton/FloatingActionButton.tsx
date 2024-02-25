import { useRouter } from "next/router";
import { ModalType } from "../../modal/Modal";
import classNames from "classnames";
import styles from "./FloatingActionButton.module.scss";
import Image from "next/image";

function FloatingActionButton({ className }: any) {
  const router = useRouter();
  const { folderId } = router.query;

  const handleClick = () => {
    folderId
      ? router.push(`${router.asPath}&type=${ModalType.ADD_FOLDER}`)
      : router.push(`${router.pathname}?type=${ModalType.ADD_FOLDER}`);
  };

  return (
    <button className={classNames(styles.fab, className)} onClick={handleClick}>
      <p className={styles.text}>폴더 추가</p>
      <Image
        src="/assets/addwhite.svg"
        width="16"
        height="16"
        alt="폴더 추가 버튼"
      />
    </button>
  );
}

export default FloatingActionButton;
