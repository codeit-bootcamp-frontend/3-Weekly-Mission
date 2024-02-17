import { useEffect, useState } from "react";
import styled from "styled-components";

import getFetch from "../../../utils/getFetch";
import getFormattedCamelCaseData from "../../../utils/getFormattedCamelCaseData";
import ModalFolderList from "./ModalFolderList";
import { FolderDataInterface } from "../../../interfaces";

const ModalUpdateFolderCollection = () => {
    const [folderData, setFolderData] = useState<FolderDataInterface[]>();

    // 전체 폴더 데이터
    useEffect(() => {
        try {
            getFetch("bootcamp-api.codeit.kr", "api/users/1/folders").then(
                (res) => {
                    setFolderData(() => {
                        return getFormattedCamelCaseData(res.data);
                    });
                }
            );
        } catch (error) {
            console.error(error);
        }
    }, []);

    if (folderData === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <StyledModalUpdateFolderCollection>
            {folderData.map((folder) => {
                return <ModalFolderList key={folder.id} folder={folder} />;
            })}
        </StyledModalUpdateFolderCollection>
    );
};

const StyledModalUpdateFolderCollection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export default ModalUpdateFolderCollection;
