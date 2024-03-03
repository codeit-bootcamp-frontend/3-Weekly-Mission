import styles from "./Cards.module.css";
import Card from "./Card";
import { UserFolderData } from "@/pages/folder/[id]";

export default function Cards({
  data: folderLinkList,
}: {
  data: UserFolderData[];
}) {
  return (
    <div className={styles["card-container"]}>
      {folderLinkList.length ? (
        folderLinkList?.map((link: UserFolderData) => (
          <Card key={link.id} data={link} />
        ))
      ) : (
        <div className={styles["no-link"]}>저장된 링크가 없습니다</div>
      )}
    </div>
  );
}
