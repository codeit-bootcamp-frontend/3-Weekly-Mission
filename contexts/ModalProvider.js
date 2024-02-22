import React, { useState } from "react";

export const ModalStateContext = React.createContext();
export const ModalSetterContext = React.createContext();

function ModalProvider({ children }) {
  const [modalState, setModalState] = useState({
    type: null,
    props: null,
  });

  return (
      <ModalSetterContext.Provider value={setModalState}>
        <ModalStateContext.Provider value={modalState}>
          {children}
        </ModalStateContext.Provider>
      </ModalSetterContext.Provider>
  );
}

export default ModalProvider;
