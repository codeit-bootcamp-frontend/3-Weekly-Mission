import styled from "styled-components";

const commonSectionStyle = `
  width: 100%;
  color: var(--linkbrary-gray-100, #373740);
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;

  @media (min-width: 1200px) {
    max-width: 106rem;
    margin: 0 auto;
    font-size: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 4rem 4rem;
  gap: 4rem;
`;

export const Section = styled.div`
  ${commonSectionStyle};
`;

export const H1 = styled.h1`
  ${commonSectionStyle};
`;

export const Span = styled.span`
  ${commonSectionStyle};
  color: black;
`;

export const Div = styled.div``;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 4rem;
`;
