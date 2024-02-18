import styles from "./Cards.module.css";
import Card from "./Card";

export default function Cards({ data }) {
  return (
    <div className={styles["card-container"]}>
      {data?.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}
