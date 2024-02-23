import styled from "styled-components";

const commonFooterStyle = `
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 3rem 10rem;
  min-width: 50rem;
  background: var(--color-black, #111322);
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Footer = styled.footer`
  ${commonFooterStyle};

  @media (min-width: 1200px) {
    padding: 3rem 10rem 6rem;
  }
`;

export const Logo = styled.div`
  ${commonFooterStyle};
  position: absolute;
  color: #676767;
  text-align: center;
  bottom: 3rem;

  @media (min-width: 1200px) {
    padding: 3rem 10rem 6rem;
    position: relative;
    bottom: 0;
  }
  }
`;

export const Links = styled.div`
  ${commonFooterStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const SNS = styled.div`
  ${commonFooterStyle};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`;
