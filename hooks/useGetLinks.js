import { axiosInstance } from '@/util/axiosInstance';
import { mapLinksData } from '@/util/mapLinksData';
import { useAsync } from '@/util/useAsync';
import { useCallback, useEffect } from 'react';

export const useGetLinks = (folderId = 'all') => {
  const queryString = folderId === 'all' ? '' : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get(`users/8/links${queryString}`),
    [queryString]
  );

  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const mapDataFormat = ({
    id,
    created_at,
    url,
    image_source,
    title,
    description,
  }) => ({
    id,
    createdAt: created_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
