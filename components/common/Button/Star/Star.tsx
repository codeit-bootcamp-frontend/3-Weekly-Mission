import { useState } from "react";
import Image from "next/image";
import { CardInterface } from "@/types/types";
import * as S from "./Star.style";

export default function Star({ card }: { card: CardInterface }) {
  const [isFilled, SetIsFilled] = useState(false);
  const handleButton = () => {
    SetIsFilled(!isFilled);
  };

  return (
    <>
      <S.Button onClick={handleButton}>
        {isFilled ? (
          <Image
            src={"/assets/Icons/filled-star-icon.svg"}
            alt="색이 차있는 별 아이콘 이미지"
            width={34}
            height={34}
          />
        ) : (
          <Image
            src={"/assets/Icons/no-filled-star-icon.svg"}
            alt="색이 차있지 않은 별 아이콘 이미지"
            width={34}
            height={34}
          />
        )}
      </S.Button>
    </>
  );
}
