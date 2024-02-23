import styled from "styled-components";

const commonHeaderStyle = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 3rem 0 3rem;
  background-color: var(--color-gray1);
`;

const commonContentStyle = `
  display: grid;
  margin: 120px auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "article1"
    "image1"
    "article2"
    "image2"
    "article3"
    "image3"
    "article4"
    "image4";
  gap: 80px;
  padding: 32px;
`;

const commonArticleStyle = `
  ${commonContentStyle};
  width: 32rem;

  @media (min-width: 768px) {
    grid-template-columns: 320px 100px minmax(10px, 100px) 100px 320px;
    grid-template-areas:
      "article1 . . img1 img1"
      "img2 img2 . . article2"
      "article3 . . img3 img3"
      "img4 img4 . . article4";
    grid-row-gap: 50px;
    grid-column-gap: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const commonImageStyle = `
  ${commonContentStyle};
  min-width: 300px;

  @media (min-width: 768px) {
    grid-template-columns: 320px 100px minmax(10px, 100px) 100px 320px;
    grid-template-areas:
      "article1 . . img1 img1"
      "img2 img2 . . article2"
      "article3 . . img3 img3"
      "img4 img4 . . article4";
    grid-row-gap: 50px;
    grid-column-gap: 0;
    max-width: 450px;
  }
`;

const commonSectionHighlightStyle = `
  ${commonContentStyle};
  margin-bottom: 30px;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Header = styled.header`
  ${commonHeaderStyle};

  @media (min-width: 768px) {
    padding: 7rem 0 0 0;
    margin: 0 auto;
    gap: 4rem;
  }
`;

export const Title = styled.h1`
  ${commonHeaderStyle};
  font-size: 5rem;
  text-align: center;
  font-weight: 700;
  line-height: 8rem; /* 125% */
  text-wrap: nowrap;

  @media (min-width: 768px) {
    padding: 7rem 0 0 0;
    margin: 0 auto;
    gap: 4rem;
    font-size: 6.4rem;
    min-width: 300px;
  }
`;

export const Highlight = styled.span`
  ${commonHeaderStyle};
  font-size: 5rem;
  text-align: center;
  font-weight: 700;
  line-height: 8rem; /* 125% */
  text-wrap: nowrap;
  background: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Button = styled.button`
  ${commonHeaderStyle};
  display: flex;
  width: 350px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  color: var(--grey-light, #f5f5f5);
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  background: var(--gra-purpleblue-to-skyblue);
`;

export const ImageBox = styled.div`
  ${commonHeaderStyle};
  min-width: 450px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 7rem 0 0 0;
    margin: 0 auto;
    gap: 4rem;
    max-width: 70rem;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 3rem auto;
`;

export const Content = styled.div`
  ${commonContentStyle};

  @media (min-width: 768px) {
    grid-template-columns: 320px 100px minmax(10px, 100px) 100px 320px;
    grid-template-areas:
      "article1 . . img1 img1"
      "img2 img2 . . article2"
      "article3 . . img3 img3"
      "img4 img4 . . article4";
    grid-row-gap: 50px;
    grid-column-gap: 0;
  }
`;

export const Article1 = styled.article`
  ${commonArticleStyle};
  grid-area: article1;
`;

export const Article2 = styled.article`
  ${commonArticleStyle};
  grid-area: article2;
`;

export const Article3 = styled.article`
  ${commonArticleStyle};
  grid-area: article3;
`;

export const Article4 = styled.article`
  ${commonArticleStyle};
  grid-area: article4;
`;

export const SectionTitle = styled.h3`
  ${commonContentStyle};
  margin-bottom: 30px;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const Description = styled.p`
  ${commonContentStyle};
  width: 100%;
  color: #6b6b6b;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
`;

export const Image1 = styled.div`
  ${commonImageStyle};
  grid-area: image1;
`;

export const Image2 = styled.div`
  ${commonImageStyle};
  grid-area: image2;
`;

export const Image3 = styled.div`
  ${commonImageStyle};
  grid-area: image3;
`;

export const Image4 = styled.div`
  ${commonImageStyle};
  grid-area: image4;
`;

export const SectionHighlight = styled.span`
  ${commonSectionHighlightStyle};
  background: linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%);
`;

export const SectionHighlight1 = styled.span`
  ${commonSectionHighlightStyle};
  background: linear-gradient(277deg, #6fbaff 59.22%, #ffd88b 93.66%);
`;

export const SectionHighlight2 = styled.span`
  ${commonSectionHighlightStyle};
  background: linear-gradient(
    99deg,
    #6d7ccd 19.76%,
    rgba(82, 136, 133, 0.22) 52.69%
  );
`;

export const SectionHighlight3 = styled.span`
  ${commonSectionHighlightStyle};
  background: linear-gradient(271deg, #fe578f -9.84%, #68e8f9 107.18%);
`;
