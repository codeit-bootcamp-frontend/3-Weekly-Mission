import styled from 'styled-components';


export const Shared = styled.div`
  width: 100%;

  .top {
    display: flex;
    padding: 20px 624px 60px 624px;
    flex-direction: column;
    align-items: center;

    gap: 8px;
    background: var(--linkbrary-bg, #F0F6FF);
  }

  .top-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .user-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .user-wrapper img {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
  }

  .user-wrapper p {
    color: var(--text-color-light-mode);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }

  .top-box .top-title {
    color: #000;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }

  .contents-folder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
  }

  .contents-folder .search-bar {
    display: flex;
    width: 100%;
    max-width: 1060px;
    padding: 15px 16px;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 10px;
    background: #F5F5F5;
  }


  .suggest-box {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .suggest-box img {
    width: 16px;
    height: 16px;
    fill: rgba(0, 0, 0, 0.00);
  }

  .suggest-box span {
    color: #666;
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }

  .folder-item-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px 20px;


  }

  .folder-item {
    width: 340px;
    height: 334px;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.08);
  }

  .folder-item .folder-image-area {
    width: 340px;
    height: 200px;
    background-size: 340px 200px;
    flex-shrink: 0;
    border-radius: 15px 15px 0 0;

  }


  .folder-item .folder-info-area {
    display: flex;
    width: 340px;
    padding: 15px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 0 0 15px 15px;
    background: #FFF;
  }

  .folder-item .folder-info-area .createdAt {
    color: #666;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  }

  .folder-item .folder-info-area .description {
    height: 49px;
    align-self: stretch;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;


    color: #000;
    white-space: nowrap;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }

  .folder-item .folder-info-area .date {
    height: 19px;
    align-self: stretch;
    overflow: hidden;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

`;
