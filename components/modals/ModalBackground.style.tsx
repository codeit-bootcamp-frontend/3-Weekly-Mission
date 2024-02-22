import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
  background-color: rgba(0, 0, 0, 0.4);
  inset: 0;
`;

export const ModalContainer = styled.div`
  position: fixed;
  padding: 3rem 4rem;
  background-color: white;
  border-radius: 0.8rem;
  z-index: 990;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
