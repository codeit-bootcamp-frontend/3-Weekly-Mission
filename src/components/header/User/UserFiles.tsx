interface PropsUserFiles {
  value: string;
}

function UserFiles({value}: PropsUserFiles) {
  return(
    <div className="UserFiles">
      {value}
    </div>
  )
}

export default UserFiles;