import styled from "styled-components";

interface ModalTargetProps {
    text: string;
}

const ModalTarget = ({ text }: ModalTargetProps) => {
    return <ModalTargetText>{text}</ModalTargetText>;
};

const ModalTargetText = styled.p`
    color: #9fa6b2;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    line-height: 22px; /* 157.143% */
`;

export default ModalTarget;
