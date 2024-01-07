import "./EditFolder.css";

export default function EditFolder({ selected }) {
  return (
    <div className="contents">
      <div className="contents-folders">
        {selected ? selected.name : "전체"}
      </div>
      {selected && (
        <div className="contents-box">
          <div>
            <img src="./images/share.png" alt="공유하기 아이콘 이미지" />
            <span>공유</span>
          </div>
          <div>
            <img src="./images/rename.png" alt="이름 변경하기 아이콘 이미지" />
            <span>이름 변경</span>
          </div>
          <div>
            <img src="./images/delete.png" alt="삭제하기 아이콘 이미지" />
            <span>삭제</span>
          </div>
        </div>
      )}
    </div>
  );
}
