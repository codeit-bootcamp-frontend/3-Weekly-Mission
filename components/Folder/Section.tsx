/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
// import Image from "next/image";
import { AddModal } from "./modal/Modal";
import * as S from "./Style";

export default function Section() {
  const [modal, setModal] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleAdd = () => {
    setModal("AddModal");
    setOpenModal(true);
  };

  const handleClose = () => {
    setModal(null);
    setOpenModal(false);
  };

  return (
    <>
      <S.MainSection>
        <S.SectionContainer>
          <S.SectionLinkBox>
            <S.LinkBoxImg>
              <img src={"/assets/Icons/link.svg"} alt="링크 이미지" />
            </S.LinkBoxImg>
            <S.SectionInput placeholder="링크를 추가해 보세요"></S.SectionInput>
          </S.SectionLinkBox>
          <S.AddButton>
            <S.AddText onClick={handleAdd}>추가하기</S.AddText>
          </S.AddButton>
        </S.SectionContainer>
      </S.MainSection>
      {openModal && modal === "AddModal" && <AddModal onClose={handleClose} />}
    </>
  );
}
