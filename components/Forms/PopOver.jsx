import * as S from './PopOver.style';
import {useEffect, useRef} from "react";

const list = [
  {
    text: "삭제하기",
    onClick: () => {
      console.log("삭제하기")
    }
  },
  {
    text: "폴더에 추가",
    onClick: () => {
      console.log("폴더에 추가하기");
    }
  }
]

export default function PopOver({onClickOutside}) {

  const popOverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popOverRef.current && !popOverRef.current.contains(e.target)) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [onClickOutside]);

  return (
      <div ref={popOverRef}>
        <S.List>
          {list.map((item, index) => (
              <li key={index} onClick={item.onClick}>
                {item.text}
              </li>
          ))}
        </S.List>
      </div>
  );
}
