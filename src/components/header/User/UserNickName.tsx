interface PropsUserNickName {
  value: string;
}

function UserNickName({value}: PropsUserNickName) {
  return(
    <div className="UserNickName">
        {value}
    </div>
  )
}

export default UserNickName;