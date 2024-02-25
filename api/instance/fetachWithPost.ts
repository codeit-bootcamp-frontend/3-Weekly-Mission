import { getStringTypeError } from '@api/util/getStringTypeError';
import { getUrlWithQs } from '@api/util/getURL';

const fetchWithPost = async <T, R>(
  endPoint: string,
  body?: T,
  qs?: ConstructorParameters<typeof URLSearchParams>[number],
): Promise<R | Error> => {
  try {
    const url = getUrlWithQs(process.env.NEXT_PUBLIC_BASE_URL, endPoint, qs);

    const response = await fetch(url.href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error(response);
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('🚀 ~ fetchWithPost ~ error:', error);

    throw new Error(getStringTypeError(error));
  }
};

export { fetchWithPost };
