import Image from "next/image";
import styles from "./Spinner.module.css";
import { spinnerImg } from "@/public/img";

export default function Spinner({ className = "" }) {
  return (
    <Image
      className={`${styles.spinner} ${className}`}
      src={spinnerImg.src}
      width={45}
      height={45}
      alt="로딩 중...."
    />
  );
}
