import { getUrlWithQs } from '@api/util/getURL';

const fetchWithGet = async <T>(
  endPoint: string,
  qs?: ConstructorParameters<typeof URLSearchParams>[number],
): Promise<T | void> => {
  try {
    const url = getUrlWithQs(process.env.NEXT_PUBLIC_BASE_URL, endPoint, qs);

    const response = await fetch(url.href, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('🚀 ~ fetchWithGet ~ error:', error);
    // 에러 때 딱히 뭐 하라는 게 읎음.
  }
};

export { fetchWithGet };
