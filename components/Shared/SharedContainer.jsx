import React from "react";
import SharedItem from "./SharedItem";

const SharedContainer = ({folder}) => {


  return (
      <>
        {folder.length === 0 ?
            <div>폴더가 없습니다.</div> :

            <div className="folder-item-container">
              {folder.map((item) => (
                  <SharedItem key={item.id} item={item}/>
              ))}
            </div>
        }
      </>
  )
}
export default SharedContainer;
