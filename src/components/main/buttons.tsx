import { MyFolders, CurrentFolder } from "types"

interface ButtonProps {
  folder: MyFolders;
  onClick: (p?: CurrentFolder) => void;
}

function Button({folder, onClick}: ButtonProps) {
  const handleClick = () => folder && onClick({
    id: folder.id,
    name: folder.name
  })
  return (
    <button onClick={handleClick} className="button">{folder.name}</button>
  )
}

interface ButtonsProps {
  folders: MyFolders[];
  onClick: (p?: CurrentFolder) => void
}

export const Buttons = ({folders, onClick}: ButtonsProps) => {
  return (
<div className="Buttons">
      {folders &&  folders.map((folder) => <Button key={folder.id} folder={folder} onClick={onClick}/>)}
</div>
  )
}
