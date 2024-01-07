import "./SearchLink.css";

export default function SearchLink() {
  return (
    <label className="contents">
      <img src="./images/search.png" alt="링크 검색하기 아이콘 이미지" />
      <input placeholder="링크를 검색해 보세요"></input>
    </label>
  );
}
