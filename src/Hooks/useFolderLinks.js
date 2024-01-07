import { useEffect, useState } from 'react';
import getFetchRequest from '../utils/getFetchRequest';
import { API_FOLDERS, API_LINKS, API_USERS } from '../constants/api';

const useFolderLinks = (host, path, folderId = 0) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUserFolderLinks = async () => {
      let apiPath = `${API_USERS}/1`;

      if (path === 'folders') {
        apiPath += `/${API_FOLDERS}`;
      } else if (path === 'links' && folderId !== 0) {
        apiPath += `/${API_LINKS}?folderId=${folderId}`;
      } else {
        apiPath += `/${API_LINKS}`;
      }
      const result = await getFetchRequest(host, apiPath);
      setData(result.data);
    };

    getUserFolderLinks();
  }, [path, folderId]);

  return data;
};

export default useFolderLinks;
