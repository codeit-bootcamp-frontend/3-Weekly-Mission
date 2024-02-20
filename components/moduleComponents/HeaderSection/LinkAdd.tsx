import styles from "./LinkAdd.module.css";
import Image from "next/image";
import { link_svg } from "@/public/image";

export default function LinkAdd() {

  return (
    <div className={styles.link_Add_Area}>
      <form className={styles.link_Add_Box}>
        <input type="text" placeholder="링크를 추가해 보세요" />
        <Image className={styles.link_svg} src={link_svg} alt="link" width={20} height={20}/>
        <button className={styles.link_Add_Button}>
          추가하기
        </button>
      </form>
    </div>
  );
}
