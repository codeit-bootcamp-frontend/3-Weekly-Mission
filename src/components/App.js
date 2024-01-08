import "./App.css";
import Shared from "../pages/Shared";
import Folder from "../pages/Folder";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/shared" element={<Shared />} />
      <Route path="/folder" element={<Folder />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
// 링크 공유 페이지 url path는 ‘/shared’, 폴더 페이지 url path는 ‘/folder’가 되도록 설정했나요? O
// 폴더 페이지에서 상단 네비게이션 바는 스크롤 시 상단에 고정하지 않고 가려지도록 했나요? X
// 상단 네비게이션 바에 프로필 영역의 데이터는 https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/users/1”을 활용했나요? O
// “전체” 폴더를 선택한 경우 “공유”, “이름 변경”, “삭제” 버튼들이 보이지 않지만, 다른 폴더를 선택한 경우에는 버튼들이 보이나요? O
// 폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용했나요? O
// “전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용하고, 이외의 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용했나요? O
// Mobile에서 “폴더 추가” 버튼은 최하단에서 101px 떨어져있는 Floating Action Button으로 만들었나요? X