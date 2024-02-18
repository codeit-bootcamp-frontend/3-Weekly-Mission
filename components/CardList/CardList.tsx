import { useEffect, useState } from "react";
import { getLinkDataByFolderId, Folder, Link } from "@/api/api";
import Card from "./Card/Card";
import { ALL_LINKS_ID } from "../Folder/constants";
import styles from "./CardList.module.css";
import OptionBox from "./OptionBox";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../Content/Content";

interface Props {
  folderData: Folder[];
  selectedFolderId: number | string;
  selectedFolderName: string;
}
function CardList({ folderData, selectedFolderId, selectedFolderName }: Props) {
  const [cardList, setCardList] = useState<Link[]>([]);
  const [keyword, setKeyword] = useRecoilState<string>(searchKeyword);

  useEffect(() => {
    const handleLoadCardList = async () => {
      // console.log("selectedFolderId", selectedFolderId);
      const { data } = await getLinkDataByFolderId(selectedFolderId);
      setCardList(data);
      console.log(cardList);
    };

    handleLoadCardList();
  }, [selectedFolderId]);

  return (
    <div className={styles.cardListFrame}>
      <div className={styles.optionBar}>
        <span>{selectedFolderName}</span>
        {selectedFolderId === ALL_LINKS_ID || (
          <OptionBox selectedFolderName={selectedFolderName} />
        )}
      </div>
      <div className={styles.cardList}>
        {keyword?.length > 0
          ? cardList
              ?.filter((card) => {
                return (
                  card?.url?.toLowerCase().includes(keyword) ||
                  card?.description?.toLowerCase().includes(keyword) ||
                  card?.title?.toLowerCase().includes(keyword)
                );
              })
              .map((link) => (
                <Card key={link.id} link={link} folderData={folderData}></Card>
              ))
          : cardList.map((link) => (
              <Card key={link.id} link={link} folderData={folderData}></Card>
            ))}
      </div>
    </div>
  );
}
export default CardList;
