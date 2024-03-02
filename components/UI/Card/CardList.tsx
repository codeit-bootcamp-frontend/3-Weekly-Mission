import Card from "./Card";
import FetchSharedData, { LinksType } from "../../../api/FetchSampleFolderData";

function CardList() {
  try {
    const folderData = FetchSharedData();
    if (folderData === null) {
      return <div>Loading...</div>; // 또는 다른 로딩 상태를 나타내는 JSX
    }
    const dataArray: LinksType[] = folderData.folder.links;
    // 배열에 접근해 데이터 중에서도 내용 소스만 뽑아냄
    return <Card dataArray={dataArray} />;
  } catch (error) {
    console.error("데이터 가져오다가 에러 났어용", error);
    throw new Error("데이터를 가져오는 중에 오류 발생!");
  }
}

export default CardList;
