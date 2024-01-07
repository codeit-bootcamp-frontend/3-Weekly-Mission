import UserAvatar from "./UserAvatar";
import UserNickName from "./UserNickName";
import UserFiles from "./UserFiles";

function User({profileImage, folderOwner, folderName}) {
  return (
    <div className="User">
    <div className="item01">
      <UserAvatar value={profileImage}/>
      <UserNickName value={folderOwner}/>
    </div>
      <UserFiles value={folderName}/>
    </div>
  )
}

export default User;