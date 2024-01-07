import React from "react";
import { useState, useEffect } from "react";
import { UserFolder } from "../../api/api.js";
import "./SortedFolder.css";

export default function SortedFolder({ focusedOn, selected }) {
  const [sorted, setSorted] = useState([]);
  const ClickFunc = (folder) => {
    focusedOn(folder);
  };

  useEffect(() => {
    async function loadData() {
      const { data } = await UserFolder(1);
      setSorted(data);
    }
    loadData();
  }, []);
  console.log(selected);

  return (
    <div className="contents">
      <ul className="contents-lists">
        <li className={`folder ${selected === "$1" ? "selected" : ""}`}>
          <div onClick={() => ClickFunc("$1")}>전체</div>
        </li>
        {sorted.map((folder) => {
          return (
            <li
              className={`folder ${
                selected.id === folder.id ? "selected" : ""
              }`}
              key={folder.id}
              onClick={() => ClickFunc(folder)}
            >
              <div>{folder.name}</div>
            </li>
          );
        })}
      </ul>
      <div className="contents-lists-box">
        <input className="contents-lists-add"></input>
        <img src="./images/add.png" alt="리스트 추가 아이콘 이미지" />
      </div>
    </div>
  );
}
