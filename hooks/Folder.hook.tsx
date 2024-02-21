import { useEffect, useRef, useState } from "react";
import { DEFALUT_MODAL_VALUE } from "@/Constants/Constants";
import getFetch from "@/utils/getFetch";
import getFormattedCamelCaseData from "@/utils/getFormattedCamelCaseData";
import {
    CardInterface,
    FolderDataInterface,
    UserDataInterface,
    ModalInterface,
} from "@/interfaces";
import { URL_DOMAIN } from "@/Constants/Constants";
import {
    getFilteredLinkData,
    getFolderData,
    getFolderPageUserData,
    getLinkData,
} from "@/data";

// Modal을 사용하기 위한 hook
export const useModal = () => {
    // DEFALUT_MODAL_VALUE = { type: '', folderName: '', sharingUrl: '', url: '' };
    const [modal, setModal] = useState(DEFALUT_MODAL_VALUE);

    const showModal = (modalValue: ModalInterface) => {
        setModal(modalValue);
    };

    const closeModal = () => {
        setModal(DEFALUT_MODAL_VALUE);
    };

    return { modal, showModal, closeModal, setModal };
};

// 폴더들을 가지고 있는 데이터
export const useFolder = () => {
    const [folderCardData, setFolderCardData] = useState<
        CardInterface[] | undefined
    >();
    const [folderData, setFolderData] = useState<
        FolderDataInterface[] | undefined
    >();
    const originalFolderCardData = useRef([]);

    // 페이지 로드시 폴더 데이터 가지오기
    useEffect(() => {
        try {
            (async () => {
                const data = await getFolderData();
                return setFolderData(() => getFormattedCamelCaseData(data));
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    // 페이지 로드시 전체 링크 데이터 가져오기
    useEffect(() => {
        try {
            (async () => {
                const data = await getLinkData();
                setFolderCardData(() => {
                    return getFormattedCamelCaseData(data);
                });
                originalFolderCardData.current = getFormattedCamelCaseData([
                    ...data,
                ]);
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    // 폴더의 전체 버튼을 클릭했을 때 가져올 데이터
    const handleOverviewCardButtonClick = () => {
        try {
            (async () => {
                const data = await getLinkData();
                setFolderCardData(() => {
                    return getFormattedCamelCaseData(data);
                });
                originalFolderCardData.current = getFormattedCamelCaseData([
                    ...data,
                ]);
            })();
        } catch (error) {
            console.error(error);
        }
    };

    // 폴더의 전체 버튼이 아닌 버튼을 클릭했을 때 가져올 데이터
    const handleFilteredCardButtonClick = (id: number) => {
        try {
            (async () => {
                const data = await getFilteredLinkData(id);
                setFolderCardData(() => {
                    return getFormattedCamelCaseData(data);
                });
            })();
        } catch (error) {
            console.error(error);
        }
    };
    return {
        folderData,
        folderCardData,
        originalFolderCardData,
        handleOverviewCardButtonClick,
        handleFilteredCardButtonClick,
        setFolderCardData,
    };
};

// 폴더 페이지의 로그인 로직과 유저 데이터를 가져오는 훅
export const useFolderPageLogin = () => {
    // login의 경우 맨처음 false가 들어오는게 명확해서 알아서 타입을 boolean으로 지정해줌
    // 반면 userData의 경우 확장의 가능성이 있으니 UserDataInterface로 지정해줌
    const [login, setLogin] = useState(false);
    const [userData, setUserData] = useState<UserDataInterface>();

    // Header의 유저 프로필 데이터
    useEffect(() => {
        try {
            (async () => {
                const data = await getFolderPageUserData();
                setUserData({ ...data[0] });
                setLogin(true);
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return { login, userData };
};

export const useScrollingSearchBar = () => {
    // ToDo useRef()들의 타입을 any로 지정한 것 수정하기
    const footerDom = useRef<HTMLDivElement>(null);
    const linkCreatorDom = useRef<HTMLDivElement>(null);
    const linkCreatorWrapperDom = useRef<HTMLDivElement>(null);
    const linkCreatorRefs = {
        linkCreatorDom,
        linkCreatorWrapperDom,
    };

    useEffect(() => {
        // 첫 렌더링시 footerDom이 빠르게 참조돼버려서 setTimeout으로 여유를 줌

        // 바깥에다가 linkCreatorDom.current를 해줬는데 왜 안쪽 if문에도 linkCreatorDom.current를 해줘야하는지 모르겠음
        if (
            linkCreatorWrapperDom.current &&
            footerDom.current &&
            linkCreatorDom.current
        ) {
            const linkCreatorWrapperIo = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && linkCreatorDom.current) {
                        linkCreatorDom.current.style.position = "relative";
                        linkCreatorDom.current.style.bottom = "auto";
                        linkCreatorDom.current.style.left = "auto";
                        linkCreatorDom.current.style.right = "auto";
                        linkCreatorDom.current.style.padding = "0px";
                    }
                });
            });

            const linkCreatorIo = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting && linkCreatorDom.current) {
                        linkCreatorDom.current.style.position = "fixed";
                        linkCreatorDom.current.style.bottom = "0px";
                        linkCreatorDom.current.style.left = "0px";
                        linkCreatorDom.current.style.right = "0px";
                        linkCreatorDom.current.style.padding = "24px 320px";
                    }
                    if (entry.isIntersecting && linkCreatorDom.current) {
                        linkCreatorIo.observe(linkCreatorDom.current);
                    }
                });
            });

            const footerIo = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && linkCreatorDom.current) {
                        linkCreatorIo.unobserve(linkCreatorDom.current);
                        linkCreatorDom.current.style.display = "none";
                    }
                    if (!entry.isIntersecting && linkCreatorDom.current) {
                        linkCreatorIo.observe(linkCreatorDom.current);
                        linkCreatorDom.current.style.display = "flex";
                    }
                });
            });

            linkCreatorWrapperIo.observe(linkCreatorWrapperDom.current);
            footerIo.observe(footerDom.current);
            linkCreatorIo.observe(linkCreatorDom.current);
        }
    }, [footerDom, linkCreatorDom, linkCreatorWrapperDom]);

    return { linkCreatorRefs, footerDom };
};
