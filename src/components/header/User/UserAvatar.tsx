interface PropsUserAvatar {
  value: string;
}

function UserAvatar({value}: PropsUserAvatar) {
  return(
    <div className="UserAvatar">
      <img src={value} alt={value} />
    </div>
  )
}

export default UserAvatar;