import styled from "styled-components";
import Image from "next/image";
import link from "@/public/images/link.svg";
import { DEFALUT_MODAL_VALUE } from "@/Constants/Constants";
import { ShowModal } from "@/types";

interface LinkCreatorProps {
    onUpdateButtonClick: ShowModal;
    linkCreatorDom: React.RefObject<HTMLDivElement>;
    linkCreatorWrapperDom: React.RefObject<HTMLDivElement>;
}

const LinkCreator = (
    {
        onUpdateButtonClick,
        linkCreatorDom,
        linkCreatorWrapperDom,
    }: LinkCreatorProps,
    ref: any
) => {
    return (
        <EmptySpace ref={linkCreatorWrapperDom}>
            <Background ref={linkCreatorDom}>
                <LinkCreatorWrapper>
                    <div>
                        <LinkCreatorImg
                            src={link}
                            alt="링크 이미지"
                            width={20}
                            height={20}
                        />
                        <LinkCreatorInput
                            type="text"
                            placeholder="링크를 추가하세요"
                        />
                    </div>
                    <CreateLinkButton
                        type="button"
                        onClick={() => {
                            onUpdateButtonClick({
                                ...DEFALUT_MODAL_VALUE,
                                type: "UpdateFolder",
                            });
                        }}
                    >
                        추가하기
                    </CreateLinkButton>
                </LinkCreatorWrapper>
            </Background>
        </EmptySpace>
    );
};
const EmptySpace = styled.div`
    box-sizing: border-box;
    background: var(--gray5);
    padding: 113px 32px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    @media (max-width: 767px) {
        padding: 87px 32px 40px;
    }
`;

const Background = styled.div`
    box-sizing: border-box;
    background: var(--gray5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    @media (max-width: 767px) {
        padding: 87px 32px 40px;
    }
`;

const LinkCreatorWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    padding: 16px 20px;
    border-radius: 15px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);

    @media (max-width: 767px) {
        padding: 87px 32px 40px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    @media (max-width: 864px) {
        width: 100%;
    }

    @media (max-width: 767px) {
        padding: 8px 10px;

        div {
            gap: 8px;
        }
    }
`;

const LinkCreatorImg = styled(Image)`
    @media (max-width: 767px) {
        width: 16px;
        height: 16px;
    }
`;

const LinkCreatorInput = styled.input`
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: normal;
    }
`;

const CreateLinkButton = styled.button`
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    font-family: Pretendard;
    font-size: 14px;
    background: var(
        --gra-purpleblue-to-skyblue,
        linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
    color: var(--Grey-Light, #f5f5f5);
`;

export default LinkCreator;
