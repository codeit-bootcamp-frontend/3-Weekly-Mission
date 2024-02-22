import Card from "@/components/Card";
import styles from "./style.module.css";
import { FolderLinksData } from "@/pages/shared";

interface CardlistProps {
  links: FolderLinksData;
  searchKeyword: string;
}

function Cardlist({ links, searchKeyword }: CardlistProps) {
  const isMatchSearchKeyword = (link: FolderLinksData) => {
    if (!searchKeyword) {
      return true;
    }

    if (!link) {
      return false;
    }

    const urlMatch = link.url
      .toUpperCase()
      .includes(searchKeyword.toUpperCase());
    const titleMatch = link.title
      .toUpperCase()
      .includes(searchKeyword.toUpperCase());
    const descriptionMatch = link.description
      .toUpperCase()
      .includes(searchKeyword.toUpperCase());

    return urlMatch || titleMatch || descriptionMatch;
  };

  return (
    <section className="container">
      <ul className={styles.cardlist}>
        {links.map((link: FolderLinksData) => {
          if (isMatchSearchKeyword(link)) {
            return <Card link={link} key={link.id} />;
          } else {
            return null;
          }
        })}
      </ul>
    </section>
  );
}

export default Cardlist;
