import { useEffect, useRef, useState } from "react";
import { DEFALUT_MODAL_VALUE } from "@/Constants/Constants";
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
    getFolderPageUserData,
    getLinkData,
} from "@/data";
import {
    getFilteredLinkList,
    getFolderList,
    getFolderPageUser,
    getLinkList,
} from "@/apis/api";

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
    const originalFolderCardData = useRef<any>([]);

    // 페이지 로드시 폴더 데이터 가지오기
    useEffect(() => {
        try {
            (async () => {
                const { data } = await getFolderList();
                return setFolderData(() => data);
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    // 페이지 로드시 전체 링크 데이터 가져오기
    useEffect(() => {
        try {
            (async () => {
                const { data } = await getLinkList();
                setFolderCardData(() => {
                    return data;
                });
                originalFolderCardData.current = [...data];
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    // 폴더의 전체 버튼을 클릭했을 때 가져올 데이터
    const handleOverviewCardButtonClick = () => {
        try {
            (async () => {
                const { data } = await getLinkList();
                setFolderCardData(() => {
                    return data;
                });
                originalFolderCardData.current = [...data];
            })();
        } catch (error) {
            console.error(error);
        }
    };

    // 폴더의 전체 버튼이 아닌 버튼을 클릭했을 때 가져올 데이터
    const handleFilteredCardButtonClick = (id: number) => {
        try {
            (async () => {
                const { data } = await getFilteredLinkList(id);
                setFolderCardData(() => {
                    return data;
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
    const [login, setLogin] = useState(false);
    const [userData, setUserData] = useState<UserDataInterface>();

    // Header의 유저 프로필 데이터
    useEffect(() => {
        try {
            (async () => {
                const { data } = await getFolderPageUser();
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
    const footerDom = useRef<HTMLDivElement>(null);
    const linkCreatorDom = useRef<HTMLDivElement>(null);
    const linkCreatorWrapperDom = useRef<HTMLDivElement>(null);
    const linkCreatorRefs = {
        linkCreatorDom,
        linkCreatorWrapperDom,
    };

    useEffect(() => {
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
