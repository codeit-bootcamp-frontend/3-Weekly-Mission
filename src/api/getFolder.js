const getFolder = async function () {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const folderData = await response.json();
    return folderData;
  } catch {
    throw Error("데이터를 불러오지 못했습니다.");
  }
};

export default getFolder;
