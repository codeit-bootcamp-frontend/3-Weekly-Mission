import { useState } from "react";
import SelectFolderItem from "./SelectFolderItem";
import styles from "./SelectFolderBox.module.css";
import { Folder } from "@/api/api";

interface Props {
  folderData?: Folder[] | null;
}

function SelectFolderBox({ folderData }: Props) {
  const [selectedItem, setSelectedItem] = useState<number>();

  return (
    <div className={styles.folderContainer}>
      {folderData &&
        folderData.map((item: Folder) => (
          <SelectFolderItem
            key={item.id}
            name={item.name}
            count={item?.link?.count}
            onClick={() => setSelectedItem(item.id)}
            isSelected={item.id === selectedItem}
          />
        ))}
    </div>
  );
}

export default SelectFolderBox;
