import "./AddLink.css";
import link from "../../assets/link.svg";

function AddLink() {
  return (
    <>
      <div className="addlink-container">
        <div className="addlink-inputbox">
          <label>
            <img src={link} alt="link" />
            <div>
              <input
                className="addlink-input"
                placeholder="링크를 추가해 보세요"
                id="add-link"
              />
              <button className="addlink-button">추가하기</button>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}

export default AddLink;
