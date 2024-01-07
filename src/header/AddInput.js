import LINKIMAGE from '../img/link.svg';

export default function AddInput() {
  return (
    <div className="AddInput">
      <div className="AddInput-input">
        <div className="AddInput-fnc">
          <img src={LINKIMAGE} alt="" />
          <input type="text" placeholder="링크를 추가해 보세요"/> 
          <button><div className="text">추가하기</div></button>
        </div>
      </div>
    </div>
  );
}
