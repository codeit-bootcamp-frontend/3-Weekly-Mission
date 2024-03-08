import { useEffect, useRef, useState } from "react";
import { DEFALUT_MODAL_VALUE } from "@/constants/constants";
import { LinkInterface, ModalInterface } from "@/interfaces";
import {
    getRefinedFilteredLinkList,
    getRefinedLinkList,
} from "@/apis/services";

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

// 링크 리스트와 관련된 훅
export const useLinkList = () => {
    const [LinkList, setLinkList] = useState<LinkInterface[] | undefined>();

    const originalLinkList = useRef<any>([]);

    // 페이지 로드시 전체 링크 데이터 가져오기
    useEffect(() => {
        try {
            (async () => {
                const refinedLinkList = await getRefinedLinkList();
                setLinkList(() => {
                    return refinedLinkList;
                });
                originalLinkList.current = [...refinedLinkList];
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    // 폴더의 전체 버튼을 클릭했을 때 가져올 데이터
    const handleOverviewFolderButtonClick = () => {
        try {
            (async () => {
                const refinedLinkList = await getRefinedLinkList();
                setLinkList(() => {
                    return refinedLinkList;
                });
                originalLinkList.current = [...refinedLinkList];
            })();
        } catch (error) {
            console.error(error);
        }
    };

    // 폴더의 전체 버튼이 아닌 버튼을 클릭했을 때 가져올 데이터
    const handleFilteredFolderButtonClick = () => {
        try {
            (async () => {
                const refinedFilteredLinkList =
                    await getRefinedFilteredLinkList();
                setLinkList(() => {
                    return refinedFilteredLinkList;
                });
            })();
        } catch (error) {
            console.error(error);
        }
    };
    return {
        LinkList,
        originalLinkList,
        handleOverviewFolderButtonClick,
        handleFilteredFolderButtonClick,
        setLinkList,
    };
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
