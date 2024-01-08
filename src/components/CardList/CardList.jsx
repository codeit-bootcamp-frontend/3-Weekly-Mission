import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

export default function CardList({ itemList, toggle }) {
  return (
    <ul className="card-list">
      {itemList
        ? itemList.map((item) => {
            return (
              <li className="card" key={item.id}>
                <Card toggle={toggle} item={item} />
              </li>
            );
          })
        : null}
    </ul>
  );
}
