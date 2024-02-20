import Profile from "../components/moduleComponents/HeaderSection/Profile";
import Footer from "../components/moduleComponents/FooterSection/Footer";
import LinkAdd from "../components/moduleComponents/HeaderSection/LinkAdd";
import FolderListBtn from "../components/moduleComponents/folder/FolderListBtn";
import Search from "../components/moduleComponents/CardSection/Search";
import styles from "../components/moduleComponents/CardSection/CardSection.module.css";
import React from "react";

export default function FolderPage() {
  return (
    <>
      <Profile />
      <LinkAdd />
      <div className={styles.main_Area}>
        <div className={styles.main_Box}>
          <Search />
          <FolderListBtn />
        </div>
      </div>
      <Footer />
    </>
  );
}
