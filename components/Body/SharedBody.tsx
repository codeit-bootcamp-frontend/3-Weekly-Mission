import styles from "./SharedBody.module.css";
import SearchBar from "./SearchBar";
import CardList from "../UI/Card/CardList";

function SharedBody() {
  return (
    <div className={styles.body}>
      <SearchBar />
      <CardList />
    </div>
  );
}

export default SharedBody;
