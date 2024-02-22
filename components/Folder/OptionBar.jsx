import shareIcon from '@/assets/icons/share-icon.svg';
import deleteIcon from '@/assets/icons/delete-icon.svg';
import updateIcon from '@/assets/icons/update-icon.svg';
import ShareModal from "../Modal/ShareModal";
import EditFolderNameModal from "../Modal/EditFolderNameModal";
import DeleteFolderModal from "../Modal/DeleteFolderModal";

export default function OptionBar() {

  const loadShareModal = () => {
    console.log("share modal")
    return (
        <ShareModal/>
    )
  }

  const loadUpdateModal = () => {
    console.log("update modal")
    return (
        <EditFolderNameModal/>
    )
  }

  const loadDeleteModal = () => {
    console.log("delete modal")
    return (
        <DeleteFolderModal/>
    )
  }

  const optionsList = [
    {
      name: "share",
      icon: shareIcon,
      text: "공유",
      buttonAction: ()=> loadShareModal()
    },
    {
      name: "update",
      icon: updateIcon,
      text: "이름 변경",
      buttonAction: ()=> loadUpdateModal()
    },
    {
      name: "delete",
      icon: deleteIcon,
      text: "삭제",
      buttonAction: ()=> loadDeleteModal()
    }
  ]

  return (
      <div className="options-container">
        {optionsList.map((option, index) => (
            <button key={index} onClick={option.buttonAction}>
              <img src={option.icon} alt={option.name}/>
              <p>{option.text}</p>
            </button>
        ))}
      </div>
  )
}
