import { useState } from "react";

interface IModal {
  state?: boolean;
  target?: string;
  folderName?: string;
  url?: string;
}

export default function useModal() {
  const [modalState, setModalState] = useState<IModal>({
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
