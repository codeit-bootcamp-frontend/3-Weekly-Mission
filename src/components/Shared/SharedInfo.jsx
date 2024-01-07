import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getFetchRequest from '../../utils/getFetchRequest';
import { BASE_API_HOST } from '../../constants/api';
import Loading from '../Loading/Loading';

const SharedInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 60px;
  background: #f0f6ff;
  @media (max-width: 767px) {
    & {
      padding: 10px 0 40px;
    }
  }
`;
const SharedInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const SharedOwner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.img`
  width: 47px;
  height: 47px;
  @media (max-width: 767px) {
    & {
      width: 40px;
      height: 40px;
    }
  }
`;
const SharedOwnerName = styled.span`
  line-height: 24px;
  @media (max-width: 767px) {
    & {
      font-size: 14px;
      line-height: normal;
    }
  }
`;
const SharedFolderName = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  @media (max-width: 767px) {
    & {
      font-size: 32px;
    }
  }
`;

export default function SharedInfo() {
  const API_FOLDER = 'sample/folder';
  const [avatar, setAvatar] = useState(null);
  const [owner, setOwner] = useState('');
  const [folderName, setFolderName] = useState('');
  const [condition, setCondition] = useState('noData');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setCondition('loading');
    const getSharedInfo = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
        setAvatar(result.folder.owner.profileImageSource);
        setOwner(result.folder.owner.name);
        setFolderName(result.folder.name);
        setCondition('getInfoSuccess');
      } catch (e) {
        setErrorMessage(e.message);
        setCondition('error');
      }
    };
    getSharedInfo();
  }, []);

  return (
    <SharedInfoContainer>
      {
        {
          loading: <Loading />,
          getInfoSuccess: (
            <SharedInfoBox>
              <SharedOwner>
                <Avatar src={avatar} alt="유저 아바타 이미지" />
                <SharedOwnerName>{owner}</SharedOwnerName>
              </SharedOwner>
              <SharedFolderName className="shared-name">
                {folderName}
              </SharedFolderName>
            </SharedInfoBox>
          ),
          error: errorMessage,
          noData: '데이터가 없습니다.',
        }[condition]
      }
    </SharedInfoContainer>
  );
}
