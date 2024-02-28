import UserAvatar from "./UserAvatar";
import UserNickName from "./UserNickName";
import UserFiles from "./UserFiles";

interface PropsUser {
  profileImage: string;
  folderOwner: string;
  folderName: string;
}

function User({profileImage, folderOwner, folderName}: PropsUser) {
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