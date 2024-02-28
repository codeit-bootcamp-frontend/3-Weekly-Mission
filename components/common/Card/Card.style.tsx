import styled from "styled-components";

export const MainDiv = styled.div`
  position: relative;
  width: 34rem;
  height: 35rem;
  padding: 0;
  background-color: white;
  box-shadow: 0px 0.5rem 2.5rem 0rem rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;

  &:hover {
    box-shadow: 0 0 0 0.2rem var(--color-primary, #6d6afe);
  }

  :hover img {
    transform: scale(1.5);
    transition: transform 0.3s;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageSection = styled.div`
  width: 340px;
  height: 200px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
`;

export const TextSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 2rem 1.5rem;
  gap: 1rem;
`;

export const Time = styled.p`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;
`;

export const Description = styled.p`
  width: 300px;
  height: 50px;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  white-space: normal;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Created = styled.p`
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
`;
