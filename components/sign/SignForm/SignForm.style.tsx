import styled from "styled-components";

const commonMainStyle = `
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  background-color: var(--color-linkbrary, #e7effb);
  padding: 3.2rem;
`;

export const MainDiv = styled.div`
  ${commonMainStyle};
`;

export const SignBox = styled.div`
  ${commonMainStyle};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;
  width: 100%;
  min-width: 30rem;
  gap: 3rem;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const Header = styled.header`
  ${commonMainStyle};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;
  width: 100%;
  min-width: 30rem;
  gap: 3rem;
`;

export const ImageBox = styled.div`
  ${commonMainStyle};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;
  width: 100%;
  min-width: 30rem;
  gap: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.6rem;
`;

export const Image = styled.img`
  ${commonMainStyle};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;
  width: 100%;
  min-width: 30rem;
  gap: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.6rem;
  width: 21rem;
  height: 3.8rem;
`;

export const Description = styled.div`
  ${commonMainStyle};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;
  width: 100%;
  min-width: 30rem;
  gap: 3rem;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-align: center;
`;

export const Span = styled.span`
  ${commonMainStyle};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;
  width: 100%;
  min-width: 30rem;
  gap: 3rem;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-align: center;
  color: var(--color-primary, #6d6afe);
  text-decoration: underline;
`;

export const Form = styled.div`
  ${commonMainStyle};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 40rem;
  width: 100%;
  min-width: 30rem;
  gap: 3rem;
  padding: 0;
  margin: 0;
  width: 100%;
`;
