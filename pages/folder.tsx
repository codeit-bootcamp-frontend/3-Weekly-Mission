import Profile from "../components/HeaderSection/Profile";
import Footer from "../components/FooterSection/Footer";
import LinkAdd from "../components/HeaderSection/LinkAdd";
import FolderListBtn from "../components/folder/FolderListBtn";
import Search from "../components/CardSection/Search";
import styles from "../components/CardSection/CardSection.module.css";
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
