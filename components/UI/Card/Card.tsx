import styles from "./Card.module.css";

interface Data {
  id: string;
  imageSource: string;
  description: string;
  createdAt: string;
}
// 타입 : dataArray는 Data가 담긴 객체들의 배열이다.
function Card({ dataArray }: { dataArray: Data[] }) {
  return (
    <div className={styles["card-list"]}>
      {dataArray.map((data: Data, index: number) => (
        <div className={styles["card"]}>
          <div className={styles["card-image"]}>
            <img
              key={data.id}
              src={data.imageSource}
              alt={`카드이미지-${index}`}
            />
          </div>
          <div className={styles["card-content"]}>
            <div className={styles["card-uploaded-when"]}>dd</div>
            <div className={styles["card-description"]} key={data.id}>
              {data.description}
            </div>
            <div className={styles["card-createdAt"]} key={data.id}>
              {data.createdAt}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
