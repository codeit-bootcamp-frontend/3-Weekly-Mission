import { MouseEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ModalType } from "@/pages/folder/modal/Modal";
import styles from "./LinkMenu.module.scss";
import Image from "next/image";

export function LinkMenu({ linkInfo }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const { url } = linkInfo;

  const router = useRouter();

  const handleClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  const handleModalClick = (e: any) => {
    const modalType = e.target.getAttribute("value");
    const path = router.asPath;
    path.includes("?")
      ? router.push(`${router.asPath}&type=${modalType}&link=${url}`)
      : router.push(`${router.pathname}?type=${modalType}&link=${url}`);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.menu}>
      <KebabButton onClick={handleClick} />
      {isOpen && (
        <ul className={styles.popup}>
          <li value={ModalType.DELETE_LINK} onClick={handleModalClick}>
            삭제하기
          </li>
          <li value={ModalType.ADD_LINK} onClick={handleModalClick}>
            폴더에 추가
          </li>
        </ul>
      )}
    </div>
  );
}

function KebabButton({ onClick }: any) {
  return (
    <button
      style={{
        padding: "0",
        borderStyle: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Image src="/assets/kebab.svg" width="21" height="17" alt="케밥 버튼" />
    </button>
  );
}

export default LinkMenu;
