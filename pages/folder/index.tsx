import useModal from "@/hooks/useModal";
import { CardInterface, FolderInterface } from "@/types/types";
import { useCallback, useState } from "react";

const INITIAL: FolderInterface = {
  id: "",
  name: "전체",
};

export default function FolderPage() {
  const [folderList, setFolderList] = useState<FolderInterface[]>([
    INITIAL,
  ]);
  const [cardList, setCardList] = useState<CardInterface[]>([]);
  const [current, setCurrent] = useState(INITIAL);
  const [keyword, setKeyword] = useState("");
  const { modal, handleOpen, handleClose } = useModal();

  const getFolderTag = useCallback(async () => {
    const { data } = await 
  })
}