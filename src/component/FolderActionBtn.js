import share_svg from '../image/share.svg';
import pen_svg from '../image/pen.svg';
import Delete_svg from '../image/Delete.svg';
import './FolderActionBtn.css';

export default function FolderAtionBtn() {
  return (
    <div className='FolderActionBtnArea'>
      <span>
        유용한 글
      </span>
      <div className='FolderActionBtnBox'>
        <button>
          <img src={share_svg} alt='공유 버튼' />
          공유
        </button>
        <button>
          <img src={pen_svg} alt='이름 변경 버튼' />
          이름 변경
        </button>
        <button>
          <img src={Delete_svg} alt='삭제' />
          삭제
        </button>
      </div>
    </div>

    

  )
}
