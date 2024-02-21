import styled from "styled-components";

type SortedButtonProps = {
  $isSelected: boolean;
};

// Header.tsx
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  background-color: #edf7ff;
`;

export const HeaderLinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 192rem;
  height: 9.4rem;
  padding: 0 20rem;
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileBoxImg = styled.img`
  width: 5rem;
`;

export const ProfileName = styled.div`
  margin-left: 0.6rem;
  color: var(--gray100, #373740);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

// Section.tsx
export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144rem;
  padding: 6rem 32rem 9rem;
  vertical-align: middle;
  gap: 0.8rem;
  background: #f0f6ff;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76rem;
  padding: 1.6rem 2rem;
  border-radius: 1.5rem;
  border: 0.1rem solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
`;

export const SectionLinkBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkBoxImg = styled.div`
  height: 100%;
  margin-right: 1.2rem;
`;

export const SectionInput = styled.input`
  color: var(--linkbrary-gray-60, #9fa6b2);
  font-family: Pretendard;
  font-size: 16px;
  border: none;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  padding: 1rem 1.6rem;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;

export const AddText = styled.span`
  color: var(--grey-light, #f5f5f5);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// Search.tsx
export const SearchMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 106rem;
  margin: 4rem auto;
  gap: 4rem;
`;

export const SearchBox = styled.form`
  display: flex;
  justify-content: space-between;
  width: 102.8rem;
  max-width: 106rem;
  padding: 1.5rem 1.6rem;
  margin: 0 auto;
  border-radius: 1rem;
  background: #f5f5f5;
  border: 0.1rem solid #f5f5f5;

  @media (max-width: 1124px) {
    margin-left: 3.2rem;
    margin-right: 3.2rem;
  }
`;

export const SearchImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  margin-left: 1rem;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  border: none;
`;

export const SearchResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 38.1rem;
  height: 3.8rem;
  margin: 0 auto;

  & h1 {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
    display: inline;
  }

  & h2 {
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
    display: inline;
  }
`;

// Sorted.tsx
export const SortedMain = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 106rem;
  margin: 2.4rem auto;
`;

export const SortedBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 106rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  gap: 0.8rem;
`;

export const SortedButton = styled.button<SortedButtonProps>`
  font-size: 1.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: ${(props) => (props.$isSelected ? "#6D6AFE" : "#fff")};
  color: ${(props) => (props.$isSelected ? "#fff" : "black")};
  cursor: pointer;
`;

export const SortedInput = styled.input`
  color: #6d6afe;
  margin-right: 4px;
  border: none;
  text-align: center;
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const SortedImg = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;

// Card.tsx
export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 34rem;
  height: 33.4rem;
  border-radius: 1rem;
  border: 2px solid rgba(0, 0, 0, 0);
  overflow: hidden;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  margin: 0 auto;

  &:hover {
    border: 2px solid var(--primary);
  }

  &:hover {
    transition: all 1s;
    transform: scale(1.3);
  }

  &:not(hover) {
    transition: all 1s;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
  overflow: hidden;

  &:hover {
    transition: all 1s;
    transform: scale(1.3);
  }

  &:not(hover) {
    transition: all 1s;
  }
`;

export const EmptyImg = styled.img`
  position: absolute;
  width: 13rem;
  opacity: 0.5;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StarImg = styled.img`
  position: absolute;
  width: 3.4rem;
  height: 3.4rem;
  top: 1.5rem;
  right: 1.5rem;
`;

export const CardText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem 1rem;
  gap: 1rem;
  z-index: 2;
  background-color: #fff;
`;

export const KebabBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const Ago = styled.span`
  font-size: 1.3rem;
`;

export const Kebab = styled.button`
  cursor: pointer;
  background-color: #fff;
`;

export const KebabSelect = styled.div`
  position: absolute;
  width: 10rem;
  height: 6.4rem;
  right: 0;
  top: 3rem;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

export const KebabOption = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid #fff;
  color: var(--gray-light-gray-100, #333236);
  font-size: 1.4rem;
  line-height: 3.2rem;
  text-align: center;
  cursor: pointer;
  &:last-child {
    background: #e7effb;
    color: #6d6afe;
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const CardDate = styled.span`
  font-size: 1.4rem;
`;

// Footer.tsx
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  padding-top: 3.2rem;
  background-color: black;
`;

export const Copyright = styled.span`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
`;

export const FooterLinkBox = styled.div`
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
`;

export const FooterLink = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;

export const SNS = styled.div`
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
`;

// Folder.tsx
export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 106rem;
  padding: 0 3.2rem;
  margin: 0 auto 10rem;
`;

export const CardTitleText = styled.h2`
  font-size: 2.4rem;
`;

export const SortedEdit = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const EditContent = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #9fa6b2;
  background-color: #fff;
  cursor: pointer;
`;

export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 106rem;
  margin: 0 auto 10rem;
  gap: 1rem;
  padding: 0 3.2rem;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 106rem;
  min-height: 20rem;
  padding: 4.1rem 0rem 3.5rem 0rem;
  margin: 0 auto;
  font-size: 1.6rem;
`;
