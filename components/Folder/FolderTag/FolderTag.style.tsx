import styled from "styled-components";

export const TagButton = styled.button`
  padding: 1rem;
  white-space: nowrap;
  border-radius: 10px;
  background-color: white;
  border: 1px solid var(--color-primary);

  &:hover {
    background-color: var(--linkbrary-bg, #f0f6ff);
  }
`;

export const FolderTagDiv = styled.div`
  width: 100%;
`;

export const FolderTagBox = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: 1200px) {
    width: 106rem;
    margin: auto;
  }
`;
