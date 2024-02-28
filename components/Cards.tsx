import styles from "./Cards.module.css";
import Card from "./Card";
import type { UserFolderData } from "@/hooks/useGetUserFolder";


export default function Cards({
  data: sampleFolderLinkList,
}: {
  data: UserFolderData[];
}) {
  return (
    <div className={styles["card-container"]}>
      {sampleFolderLinkList?.map((link: UserFolderData) => (
        <Card key={link.id} data={link} />
      ))}
    </div>
  );
}
