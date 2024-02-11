import Modal from "react-modal";
import "./ModalMessage.css";
import close_svg from "../../image/close.svg";
import {SnsIcon} from "./SnsIcon";

export default function ModalMessge({
  modalOpen,
  headerText,
  buttonText,
  onClick,
  type,
  placeholder,
  icon,
  folderName,
  close,
}) {
  const customModalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      width: "100%",
      height: "100%",
      zIndex: "10",
    },
    content: {
      width: "400px",
      height: "280px",
      padding: "32px 40px",
      zIndex: "11",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
      border: "1px solid var(--Linkbrary-gray20, #CCD5E3)",
      backgroundColor: "white",
      position: "relative",    
    },
  };
  const styletype = ["blue", "red"].includes(type) ? type : "default";
  return (
    <Modal
      isOpen={modalOpen} // isopen은 모달창이 열리고 닫히는 상태를 나타내는 변수 //modalOpen은 모달창이 열려있는지 닫혀있는지를 나타내는 상태를 나타내는 변수
      style={customModalStyle}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <h4 className="modal_title">
        {headerText}
        <img
          src={close_svg}
          alt="모달창 닫기버튼"
          className="modal_closebtn"
          onClick={(e) => {e.preventDefault(); close(false)}}
        />
      </h4>
     {placeholder ? <input className="modal_input" type="text" placeholder={placeholder} /> : null}
     {folderName ? <p className="modal_folder_name">{folderName}</p> : null}
     {buttonText ? <button className={["modal_btn", `modal_btn_${styletype}`].join(" ")} onClick={onClick}>{buttonText}</button> : null}
     {icon ? <SnsIcon/> : null}
    </Modal>
  );
}

ModalMessge.defaultProps = {
  type: "default",
};

// import Modal from 'react-modal';
// import './ModalMessage.css';
// import close_svg from '../../image/close.svg';

// export default function ModalMessge({modalOpen,  headerText, buttonText, onClick, type}) {

//   const customModalStyle = {
//     overlay: {
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       width : '100%',
//       height : '100%',
//       zIndex : '10',
//     },
//     content: {
//       width: "375px",
//       height: "260px",
//       padding: '32px 40px',
//       zIndex: "11",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       borderRadius: "15px",
//       border : '1px solid var(--Linkbrary-gray20, #CCD5E3)',
//       backgroundColor: "white",
//       position:'relative'
//     }
//   }
//   const styletype = ["blue", "red"].includes(type) ? type : "default";
// return (
//     <Modal
//       isOpen={modalOpen} // isopen은 모달창이 열리고 닫히는 상태를 나타내는 변수 //modalOpen은 모달창이 열려있는지 닫혀있는지를 나타내는 상태를 나타내는 변수
//       style={customModalStyle}
//       ariaHideApp={false}
//       contentLabel="Pop up Message"
//     >
//       <span className='modal_title'>{headerText}
//         <img src={close_svg} alt='모달창 닫기버튼' className='modal_closebtn' onClick={()=>onClick()}/>
//       </span>
//         <form className='modal_form'>
//         <input className='modal_input' type='text' placeholder='내용 입력'/>
//         <button className={['modal_btn', `modal_btn_${styletype}`].join(' ')}>{buttonText}</button>
//       </form>
//     </Modal>
//   )
// }

// ModalMessge.defaultProps = {
//   type: "default",
// };
