import React from "react";
import {TimeUtils} from "@/utils/times";
import starIcon from "../../assets/icons/star-icon.svg";
import kebabIcon from "../../assets/icons/kebab-icon.svg";
import PopOver from "../Forms/PopOver";

const FolderItem = ({item}) => {
  const {created_at, description, image_source, url} = item;
  const convertedTime = new TimeUtils(created_at).getFormattedTime();
  const formattedDate = new Date(created_at).toLocaleDateString();

  const [isPopOverOpen, setIsPopOverOpen] = React.useState(false);
  const togglePopOver = () => {
    setIsPopOverOpen(!isPopOverOpen);
  };

  const closePopOver = () => {
    setIsPopOverOpen(false);
  }

  return (
      <div className="folder-item">

        <a href={url}>
          <div className="folder-image-area"
               style={{backgroundImage: `url(${image_source})`}}>
          </div>
        </a>

        <div className=" folder-info-area">
          <div className="wrapper">
            <p className=" createdAt">{convertedTime}</p>
            <div className="kebab-wrapper">
              <button onClick={togglePopOver}>
                <img src={kebabIcon} alt='kebabIcon'/>
              </button>
              {isPopOverOpen && <PopOver onClickOutside={closePopOver}/>}
            </div>

          </div>
          <p className=" description">{description}</p>
          <p className=" date">{formattedDate}</p>
        </div>

        <img id="star-icon" src={starIcon} alt="star-icon"/>

      </div>
  )
}
export default FolderItem
