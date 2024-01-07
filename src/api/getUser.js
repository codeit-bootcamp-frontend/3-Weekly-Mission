const getUser = async function () {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const userData = await response.json();
    return userData;
  } catch {
    throw Error("데이터를 불러오지 못했습니다.");
  }
};

export default getUser;
