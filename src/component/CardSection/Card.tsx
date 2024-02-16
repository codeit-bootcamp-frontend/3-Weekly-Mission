import { createDay, beforeTime } from "../../shared";
import { useState } from "react";
import useUserLinkData from "../../Hook/useUserLinkData";
import star from "../../image/star.jpg";
import kebab_svg from "../../image/kebab.svg";
import Kebab from "../Kebab";
import { LinkType } from "../../Hook/Types";
import { Link } from "react-router-dom";

function CardList({ link }: { link: LinkType }) {
  const [kebab, setKebab] = useState(false);

  const kebabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setKebab(!kebab); //!kebab이면 true, kebab이면 false  // true일때만 kebab 컴포넌트를 보여줌
  };

  return (
    <div key={link.id} className="cardBox">
      <div className="imgBox">
        <Link to={link.url as string} target="blank">
          {link.image_source ? (
            <img
              className="linkImg"
              src={link.image_source}
              alt="링크 이미지"
            />
          ) : (
            <img className="linkImg" src={star} alt="별 이미지" />
          )}
        </Link>
      </div>
      <div className="textBox">
        <span className="time">{beforeTime(link.created_at)}</span>
        <img
          src={kebab_svg}
          alt="더보기"
          className="케밥버튼"
          onClick={kebabClick}
        />
        {kebab && ( //kebab가 true일때만 실행/ true일때만 kebab 컴포넌트를 보여줌
          <Kebab />
        )}
        <p className="description">{link.description}</p>
        <span className="date">{createDay(link.created_at)}</span>
      </div>
    </div>
  );
}

export default function Card({
  selectedFolderId,
}: {
  selectedFolderId?: number
}) {
  const { linkData } = useUserLinkData(selectedFolderId!);//!인 이유는 
  return (
    <>
      {linkData.map((link) => (
        <CardList key={link.id} link={link} />
      ))}
    </>
  );
}
//  const { linkData } = useUserLinkData(selectedFolderId!);
//!는 TypeScript의 non-null assertion 연산자. 해당 표현식이 null 또는 undefined가 아님을 단언(assert)하는 역할
