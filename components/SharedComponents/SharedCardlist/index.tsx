import isMatchSearchKeyword from "@/utils/isMatchSearchKeyword";
import SharedCard from "@/components/SharedComponents/SharedCard";
import styles from "@/styles/cardlist.module.css";

interface SharedCardlistProps {
  links: SharedFolderLinksData[];
  searchKeyword: string;
}

export default function SharedCardlist({
  links,
  searchKeyword,
}: SharedCardlistProps) {
  return (
    <section className="container">
      <ul className={styles.cardlist}>
        {links.map(
          (link: LinkDataType) =>
            isMatchSearchKeyword(link, searchKeyword) && (
              <SharedCard link={link} key={link.id} />
            )
        )}
      </ul>
    </section>
  );
}
