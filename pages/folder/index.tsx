import { CardInterface, FolderInterface } from "@/types/types";
import { useState } from "react";

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
  const { modal, handleOpen, handleClose } =
}