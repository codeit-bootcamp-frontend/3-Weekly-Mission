import { Dispatch, SetStateAction, useState } from "react";

export interface Modal {
  state?: boolean;
  target?: string;
  folderName?: string;
  url?: string;
}

export default function useModal(): [
  Modal,
  Dispatch<SetStateAction<Modal>>,
  () => void
] {
  const [modalState, setModalState] = useState<Modal>({
    state: false,
    target: "",
    folderName: "",
    url: "",
  });

  const handleModalCancel = () =>
    setModalState({
      state: false,
    });

  return [modalState, setModalState, handleModalCancel];
}
