import Image from "next/image";
import styles from "./style.module.css";

export default function FolderUtilsButtons({ selectedKeyword }) {
  const { name: selectedName } = selectedKeyword;

  return (
    <div className={`${styles["utils-button-area"]} container`}>
      <h2>{selectedName ?? selectedKeyword}</h2>
      {selectedKeyword === "전체" ? null : (
        <ul>
          <li>
            <Image
              width={18}
              height={19}
              src="/assets/share.svg"
              alt="공유 버튼 아이콘"
            />
            <span>공유</span>
          </li>
          <li>
            <Image
              width={18}
              height={19}
              src="/assets/pen.svg"
              alt="이름 변경 아이콘"
            />
            <span>이름 변경</span>
          </li>
          <li>
            <Image
              width={18}
              height={19}
              src="/assets/delete.svg"
              alt="삭제 아이콘"
            />
            <span>삭제</span>
          </li>
        </ul>
      )}
    </div>
  );
}
