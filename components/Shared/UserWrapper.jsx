import React from "react";

const UserWrapper = ({data}) => {
  const {profileImageSource, name} = data;
  return (
      <div className="user-wrapper">
        <img src={profileImageSource} alt="profileImage"/>
        <p>
          @{name}
        </p>
      </div>
  );
}

export default UserWrapper;