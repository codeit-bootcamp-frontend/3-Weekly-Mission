export function Button({folder, onClick}) {
  return (
    <button onClick={onClick} className="button">
      <div className="text">{folder.name}</div>
    </button>
  )
}

export function Title({text}) {
  return (
    <div className="Title">
      {text}
    </div>
  )
}

export function Buttons ({folders, onClick}) {
  return (
   <div className="Buttons">
      {folders.map((folder) => <Button folder={folder} onClick={onClick}/>)}
      <Title />
   </div>
  )
}

//버튼을 클릭하면 -> 버튼 아이디 마다 다른 api를 호출하여 -> 파일을 보여준다. 

// 버튼 클릭 -> api 호출 -> 파일 보여줌 