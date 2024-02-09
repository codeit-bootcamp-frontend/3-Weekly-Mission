import share_svg from "../../image/share.svg";
import pen_svg from "../../image/pen.svg";
import Delete_svg from "../../image/Delete.svg";
import ModalMessge from "../ModalMessage";
import { useState } from "react";
import "./FolderActionBtn.css";

export default function FolderAtionBtn() {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePopMessage = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const close = () => {
    setModalOpen();
  };

  return (
    <div className="FolderActionBtnArea">
      <span>유용한 글</span>
      <div className="FolderActionBtnBox">
        <button>
          <img src={share_svg} alt="공유 버튼" />
          공유
        </button>
        <button onClick={(e) => handlePopMessage(e)}>
          <img src={pen_svg} alt="이름 변경 버튼" />
          이름 변경
        </button>
        <ModalMessge
          modalOpen={modalOpen}
          message="폴더 이름 변경"
          name="변경하기"
          onClick={close}
        />
        <button>
          <img src={Delete_svg} alt="삭제" />
          삭제
        </button>
      </div>
    </div>
  );
}

// export default function FolderAtionBtn() {

//   const [modalOpen, setModalOpen] = useState(false);
//   const handlePopMessage = (e) => {
//     e.preventDefault();
//     setModalOpen(true);
//   }
//   const close=()=>{
//     setModalOpen();
//   }

//   return (
//     <div className='FolderActionBtnArea'>
//       <span>
//         유용한 글
//       </span>
//       <div className='FolderActionBtnBox'>
//         <button>
//           <img src={share_svg} alt='공유 버튼' />
//           공유
//         </button>
//         <button onClick={(e) => handlePopMessage(e)}>
//           <img src={pen_svg} alt='이름 변경 버튼' />
//           이름 변경
//         </button>
//         <ModalMessge modalOpen={modalOpen} message='폴더 이름 변경' name='변경하기' onClick={close}/>
//         <button>
//           <img src={Delete_svg} alt='삭제' />
//           삭제
//         </button>
//       </div>
//     </div>

//   )
// }
