import * as S from '../atoms/ModalList.style';
import selectedIcon from '../../../assets/icons/selected-icon.svg';
import {useState} from "react";

export default function ModalList({}) {

  const [selectedItem, setSelectedItem] = useState([]);

  const modalList = [
    {label: "label1", nums: 9},
    {label: "label1", nums: 9},
    {label: "label1", nums: 0},
  ];

  const onClickListItem = (index) => {
    if (selectedItem.includes(index)) {
      setSelectedItem(selectedItem.filter(item => item !== index));
    } else {
      setSelectedItem([...selectedItem, index]);
    }
  }

  return (
      <S.ModalList>
        {modalList.map((item, index) => (
            <S.ListItem key={index} onClick={() => onClickListItem(index)}
                        $isSelected={selectedItem.includes(index)}>
              <article>
                <h5>{item.label}</h5>
                <p>{item.nums}개의 링크</p>
              </article>
              {selectedItem.includes(index)
                  && <img src={selectedIcon} alt="selected-icon"/>}
            </S.ListItem>
        ))}
      </S.ModalList>
  );
}
