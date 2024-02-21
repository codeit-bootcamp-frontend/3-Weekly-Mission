import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Card from "./Card";
import Search from "./Search";
import styles from "../../styles/Shared.module.css";

export default function Shared() {
  const [cardUser, setCardUser] = useState();
  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((result) => result.folder.links)
      .then((carddata) => setCardUser(carddata))
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <>
      <Header />
      <Section />
      <Search />
      <div className={styles.cardBox}>
        {cardUser && cardUser.map((data) => <Card key={data.id} data={data} />)}
      </div>
      <Footer />
    </>
  );
}
