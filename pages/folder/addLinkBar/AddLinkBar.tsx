import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/button/Button";
import styles from "./AddLinkBar.module.scss";
import Image from "next/image";
import { ModalType } from "../modal/Modal";

export default function AddLinkBar() {
  const [value, setValue] = useState("");

  const router = useRouter();
  const { folderId } = router.query;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClick();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleClick = () => {
    folderId
      ? router.push(`${router.asPath}&type=${ModalType.ADD_LINK}&link=${value}`)
      : router.push(
          `${router.pathname}?type=${ModalType.ADD_LINK}&link=${value}`
        );
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Image
          className={styles.icon}
          src="/assets/link.svg"
          alt="링크 아이콘"
          width="20"
          height="20"
        />
        <input
          name="link"
          placeholder="링크를 추가해 보세요"
          value={value}
          onChange={handleChange}
        />
        <Button className={styles.button} onClick={handleClick}>
          추가하기
        </Button>
      </form>
    </>
  );
}
