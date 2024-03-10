import styles from "./Cards.module.css";
import Card from "../common/Card";
import type { UserFolderLinkData } from "@/api/api";

export default function Cards({
  data: folderLinkList,
}: {
  data: UserFolderLinkData[];
}) {
  return (
    <div className={styles["card-container"]}>
      {folderLinkList.length ? (
        folderLinkList.map((link) => (
          <Card key={link.id} data={link} folderList={[]} isFolder={false}/>
        ))
      ) : (
        <div className={styles["no-link"]}>저장된 링크가 없습니다</div>
      )}
    </div>
  );
}
