import styles from "./Button.module.css";

interface Props {
  id: string;
  text: string;
}

export default function Button({ id, text }: Props) {
  return (
    <div className={styles.formBtn}>
      <button type="submit" className={styles.formBtnGradient} id={id}>
        {text}
      </button>
    </div>
  );
}
