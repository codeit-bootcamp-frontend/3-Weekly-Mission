import { promises } from "dns";
import { UserProfileType } from "./Types";

const API_BASE_URL = "https://bootcamp-api.codeit.kr";

export async function UserIdData(){
  const response = await fetch(`${API_BASE_URL}/api/users/11`);
  const data = await response.json();
  return data;
}

export async function UserFolderListData() {
  const response = await fetch(`${API_BASE_URL}/api/users/11/folders`);
  const data = await response.json();
  return data;
}

export async function UserLinkData(folderId:number) { 
  const queryString = folderId ? `folderId=${folderId}` : '';//
  const response =await fetch(`${API_BASE_URL}/api/users/11/links?${queryString}`);//
  const data = await response.json();
  return data;
}

export async function UserProfildData():Promise<UserProfileType>{
const response = await fetch(`${API_BASE_URL}/api/sample/folder`);
const data = await response.json();
console.log(data)
return data;
}
//promise객체에 타입을 지정 안해줘도 되는 이유가 궁금합니다ㅏ... 