import React from 'react';
import UserWrapper from "./UserWrapper";

const Top = ({data}) => {
  const {owner, name} = data;

  return (
      <div className="top">
        <div className="top-box">
          <UserWrapper data={owner}/>
          <p className="top-t itle">️ {name}</p>
        </div>
      </div>
  );
}

export default Top;
