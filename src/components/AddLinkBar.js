import "./AddLinkBar.css";
export default function AddLinkBar() {
  return (
    <div className="form-container">
      <form className="add-link-form">
        <input
          className="add-link-input"
          placeholder="링크를 추가해 보세요"
        ></input>
        <button className="add-btn">추가하기</button>
      </form>
    </div>
  );
}
