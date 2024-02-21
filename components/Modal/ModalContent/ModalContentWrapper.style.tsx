import styled from "styled-components";

const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 40px;
    border-radius: 15px;
    border: 1px solid #ccd5e3;
    background: #fff;
    gap: 24px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export default ModalContentWrapper;
