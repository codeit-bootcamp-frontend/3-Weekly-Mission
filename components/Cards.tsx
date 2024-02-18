import styles from "./Cards.module.css";
import Card from "./Card";
import { ILinks } from "@/hooks/useGetFolderAsync";

interface Props {
  data: ILinks[];
}
export default function Cards({ data }: Props) {
  return (
    <div className={styles["card-container"]}>
      {data?.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}
