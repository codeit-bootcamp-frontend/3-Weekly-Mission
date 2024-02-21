import React from "react";

import {SNS_PROPERTIES} from "../../constants/snsProperties";

function FooterIcon({value}) {

  const SNS = SNS_PROPERTIES[value];
  return (
      <a href={SNS.linkTo} target="_blank" rel="noreferrer">
        <img className="icon" src={SNS.imgSrc}
             alt={SNS.alt}/>
      </a>
  )
}

export default FooterIcon;
