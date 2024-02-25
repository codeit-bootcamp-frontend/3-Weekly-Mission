import { useRouter } from "next/router";
import { ModalType } from "../../modal/Modal";
import styles from "./AddFolderButton.module.scss";
import Image from "next/image";
import classNames from "classnames";

function AddFolderButton({ className }: any) {
  const router = useRouter();
  const { folderId } = router.query;

  const handleClick = () => {
    folderId
      ? router.push(`${router.asPath}&type=${ModalType.ADD_FOLDER}`)
      : router.push(`${router.pathname}?type=${ModalType.ADD_FOLDER}`);
  };

  return (
    <button
      className={classNames(styles.addFolder, className)}
      onClick={handleClick}
    >
      폴더 추가
      <Image
        src="/assets/add.png"
        width="16"
        height="16"
        alt="폴더 추가 버튼"
      />
    </button>
  );
}

export default AddFolderButton;
