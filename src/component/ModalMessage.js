import Modal from 'react-modal';
import './ModalMessage.css';
import close_svg from '../image/close.svg';

export default function ModalMessge({modalOpen, message, name, onClick}) {
  const customModalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width : '100%',
      height : '100%',
      zIndex : '10',   
    },
    content: {
      width: "375px",
      height: "260px",
      padding: '32px 40px',
      zIndex: "11",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
      border : '1px solid var(--Linkbrary-gray20, #CCD5E3)',
      backgroundColor: "white",
      position:'relative'
    }
  }

return (   
    <Modal
      isOpen={modalOpen} 
      style={customModalStyle}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <span className='folder_name_change_modal_title'>{message}
        <img src={close_svg} alt='모달창 닫기버튼' className='folder_name_change_modal_closebtn' onClick={() => onClick()}/>
      </span>
        <form className='folder_name_change_modal_form'>
        <input className='folder_name_change_modal_input' type='text' placeholder='내용 입력'/>
        <button className='folder_name_change_modal_btn'>{name}</button>
      </form>
    </Modal>
  )
}




// export default function ModalMessge({modalOpen, message, name, onClick}) {
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

  
  
// return (   
//     <Modal
//       isOpen={modalOpen} 
//       style={customModalStyle}
//       ariaHideApp={false}
//       contentLabel="Pop up Message"
//     >
//       <span className='folder_name_change_modal_title'>{message}
//         <img src={close_svg} alt='모달창 닫기버튼' className='folder_name_change_modal_closebtn' onClick={() => onClick(false)}/>
//       </span>
//         <form className='folder_name_change_modal_form'>
//         <input className='folder_name_change_modal_input' type='text' placeholder='내용 입력'/>
//         <button className='folder_name_change_modal_btn'>{name}</button>
//       </form>
//     </Modal>
//   )
// }
