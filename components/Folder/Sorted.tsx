/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
// import Image from "next/image";
import { FolderId } from "@/pages/folder/type";
import { SortAddModal } from "./modal/Modal";
import * as S from "./Style";

type SortedProps = {
  data: FolderId[];
  clickName: React.MouseEventHandler<HTMLButtonElement>;
  selectedName: number;
};

export default function Sorted({ data, clickName, selectedName }: SortedProps) {
  const [modal, setModal] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleAdd = () => {
    setModal("SortAddModal");
    setOpenModal(true);
  };

  const handleClose = () => {
    setModal(null);
    setOpenModal(false);
  };

  return (
    <>
      <S.SortedMain>
        <div>
          <S.SortedBox>
            <S.SortedButton
              value=""
              title="전체"
              onClick={clickName}
              $isSelected={selectedName === 0}
            >
              전체
            </S.SortedButton>
            {data &&
              data.map((item) => (
                <S.SortedButton
                  key={item.id}
                  $isSelected={selectedName === item.id}
                  value={item.id}
                  title={item.name}
                  onClick={clickName}
                  style={{
                    backgroundColor:
                      selectedName === item.id ? "#6d6afe" : "#fff",
                    color: selectedName === item.id ? "#fff" : "black",
                  }}
                >
                  {item.name}
                </S.SortedButton>
              ))}
          </S.SortedBox>
        </div>
        <div>
          <S.SortedInput></S.SortedInput>
          <S.SortedImg>
            <img
              src={"/assets/Icons/add.svg"}
              onClick={handleAdd}
              alt="추가하기 아이콘 이미지"
            />
          </S.SortedImg>
        </div>
      </S.SortedMain>
      {openModal && modal === "SortAddModal" && (
        <SortAddModal onClose={handleClose} />
      )}
    </>
  );
}
