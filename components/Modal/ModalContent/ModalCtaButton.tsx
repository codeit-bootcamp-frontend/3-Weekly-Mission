import styled from "styled-components";

interface ModalCtaButtonProps {
    text: string;
    bgColor: string;
}

const ModalCtaButton = ({ text, bgColor }: ModalCtaButtonProps) => {
    return (
        <StyledModalCtaButton bgColor={bgColor}>{text}</StyledModalCtaButton>
    );
};

const StyledModalCtaButton = styled.button<{ bgColor: string }>`
    border-radius: 8px;
    width: 280px;
    padding: 16px 20px;
    background: ${(props) => props.bgColor};
    color: #f5f5f5;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
`;

export default ModalCtaButton;
