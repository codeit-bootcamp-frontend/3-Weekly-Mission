import styles from "./Cards.module.css";
import Card from "./Card";

export default function Cards({ data: sampleFolderLinkList }: any) {
  return (
    <div className={styles["card-container"]}>
      {sampleFolderLinkList?.map((link: any) => (
        <Card key={link.id} data={link} />
      ))}
    </div>
  );
}
