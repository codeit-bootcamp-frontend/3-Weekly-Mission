import styles from "./Cards.module.css";
import Card from "./Card";

export default function Cards({ data }: any) {
  return (
    <div className={styles["card-container"]}>
      {data?.map((data: any) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}
