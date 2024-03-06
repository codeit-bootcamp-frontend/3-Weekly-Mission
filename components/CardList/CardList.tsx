import React from "react";
import Card from "../Card/Card";
import { CardItem } from "../../types/dataTypes";
import { ModalButtonClickType } from "../../types/types";

interface Props {
  itemList: CardItem[];
  toggle: boolean;
  handleModalButtonClick?: ModalButtonClickType;
}

export default function CardList({
  itemList,
  toggle,
  handleModalButtonClick,
}: Props) {
  return (
    <ul className="card-list">
      {itemList
        ? itemList.map((item) => {
            return (
              <li className="card" key={item.id}>
                <Card
                  handleModalButtonClick={handleModalButtonClick}
                  toggle={toggle}
                  item={item}
                />
              </li>
            );
          })
        : null}
    </ul>
  );
}
