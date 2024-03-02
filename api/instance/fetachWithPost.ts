import { getStringTypeError } from '@api/util/getStringTypeError';
import { getUrlWithQs } from '@api/util/getURL';

const fetchWithPost = async <T, R>(
  endPoint: string,
  body?: T,
  qs?: ConstructorParameters<typeof URLSearchParams>[number],
): Promise<R> => {
  try {
    const url = getUrlWithQs(process.env.NEXT_PUBLIC_BASE_URL, endPoint, qs);

    const response = await fetch(url.href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(String(data.error?.status || response.status));
    }

    return data;
  } catch (error) {
    console.error('🚀 ~ fetchWithPost ~ error:', error);

    throw new Error(getStringTypeError(error));
  }
};

export { fetchWithPost };
