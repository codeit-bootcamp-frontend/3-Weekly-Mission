import readingGlasses from '../img/Search.svg';

function MainSearch() {
  return (
    <div className="MainSearch">
      <input className="searchBar" type="text" placeholder="링크를 검색해 보세요."/>
      <img className="readingGlasses" src={readingGlasses} alt="" />
    </div>
  )
}

export default MainSearch;