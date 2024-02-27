import React from "react";
import Search from "./Search";
import Card from "./Card";
import styles from "./CardSection.module.css";

export default function CardSection() {


  return (
    <div className={styles.main_Area}>
      <div className={styles.main_BOX}>
        <Search />
        <div className={styles.link_Img_Box}>
          <Card />
        </div>
      </div>
    </div>
  );
}
