import "./LinkAdd.css";
import link_svg from "../../image/link.svg";
import { useState } from "react";
import ModalMessge from "../modal/ModalMessage";

export default function LinkAdd() {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePopMessage = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const close = () => {
    setModalOpen();
  };

  return (
    <div className="linkAddArea">
      <form className="linkAddBox">
        <input type="text" placeholder="링크를 추가해 보세요" />
        <img className="link_svg" src={link_svg} alt="link" />
        <button className="linkAddButton" onClick={handlePopMessage}>
          추가하기
        </button>
        <ModalMessge
          type={"blue"}
          modalOpen={modalOpen}
          headerText="링크 추가"
          onClick={close}
          buttonText="추가하기"
        >
        </ModalMessge>
      </form>
    </div>
  );
}

// }

// import "./LinkAdd.css";
// import link_svg from "../../image/link.svg";
// import { useState } from "react";
// import ModalMessge from "../modal/ModalMessage";

// export default function LinkAdd() {
//   const [modalOpen, setModalOpen] = useState(false);

//   const handlePopMessage = (e) => {
//     e.preventDefault();
//     setModalOpen(true);
//   };
//   const close = () => {
//     setModalOpen();
//   };

//   return (
//     <div className="linkAddArea">
//       <form className="linkAddBox">
//         <input type="text" placeholder="링크를 추가해 보세요" />
//         <img className="link_svg" src={link_svg} alt="link" />
//         <button className="linkAddButton" onClick={handlePopMessage}>
//           추가하기
//         </button>
//         <ModalMessge
//           type={"blue"}
//           modalOpen={modalOpen}
//           headerText="링크 추가"
//           onClick={close}
//           buttonText="추가하기"
//         />
//       </form>
//     </div>
//   );
// }

// // }

// import Modal from 'react-modal';
// import './ModalMessage.css';
// import close_svg from '../../image/close.svg';

// export default function ModalMessge({modalOpen, type, children}) {

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
//   return (
//     <Modal
//       isOpen={modalOpen}
//       style={customModalStyle}
//       ariaHideApp={false}
//       contentLabel="Pop up Message"
//     >
//       {children}
//     </Modal>
//   )
// }

// ModalMessge.defaultProps = {
//   type: "default",
// };
