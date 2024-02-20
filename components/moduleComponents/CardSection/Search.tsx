import styles from "./CardSection.module.css";
import Image from "next/image";
import { glass_svg } from "@/public/image";

export default function Search() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className={styles.form_Box} onSubmit={handleSubmit}>
        <input type="text" placeholder="링크를 검색해 보세요" />
        <Image src={glass_svg} alt="glass" width={15} height={15} />
      </form>
    </div>
  );
}
