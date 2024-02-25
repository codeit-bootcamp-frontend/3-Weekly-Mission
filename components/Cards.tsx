import styles from "./Cards.module.css";
import Card from "./Card";
import { Links } from "@/pages/shared";

export default function Cards({ data: sampleFolderLinkList }: {data: Links[]}) {
  return (
    <div className={styles["card-container"]}>
      {sampleFolderLinkList?.map((link : any) => (
        <Card key={link.id} data={link} />
      ))}
    </div>
  );
}
