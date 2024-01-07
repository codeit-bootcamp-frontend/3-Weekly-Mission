import "./AddLink.css";

export default function AddLink() {
  return (
    <div className="contents">
      <label className="contents-link">
        <img
          src="./images/link.png"
          className="contents-link-image"
          alt="링크 추가하기 아이콘 이미지"
        />
        <input
          className="contents-link-box"
          placeholder="링크를 추가해 보세요"
        ></input>
        <img
          src="./images/add-link.png"
          className="contents-link-button-image"
          alt="링크 추가하기 버튼 이미지"
        />
      </label>
    </div>
  );
}
