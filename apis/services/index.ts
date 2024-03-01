import getFormattedCamelCaseData from "@/utils/getFormattedCamelCaseData";
import { getFolderList, getFolderList1, getUser } from "../api";

// services 폴더는 API 요청을 보낸후 받은 데이터를 가공하는 역할을 한다.
export const getRefinedUser = async () => {
    try {
        const user = await getUser();
        const { id, name, email, imageSource } = user.data[0];
        return { id, name, email, imageSource };
    } catch (error) {
        console.error(error);
    }
};

export const getRefinedFolderList = async () => {
    try {
        const folderList1 = await getFolderList1();
        const refinedFolderList = folderList1.data.folder;
        return refinedFolderList;
    } catch (error) {
        console.error(error);
    }
};
