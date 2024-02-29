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
      // 이메일 중복 체크
      // 얘는 json() body error 객체의 status가 없음, response status는 409
      //       {
      //   "error": {
      //     "message": "이미 존재하는 이메일입니다."
      //   }
      // }

      // signup 폼 제출
      // 얘는 json() body error 객체의 status가 없음, response status는 400
      //       {
      //   "error": {
      //     "message": "올바른 이메일이 아닙니다."
      //   }
      // }

      // 얘는 json() body error 객체의 status가 400, response status는 400
      //       {
      //   "error": {
      //     "name": "AuthApiError",
      //     "message": "User already registered",
      //     "status": 400
      //   }
      // }

      // 얘는 json() body error 객체의 status가 422, response status는 400
      //         {
      //   "error": {
      //     "name": "AuthApiError",
      //     "message": "Password should be at least 6 characters.",
      //     "status": 422
      //   }
      // }

      // 응답 내용이 겁나 뒤죽박죽이고 심지어 미션 조건이랑 다르게 비밀번호 1111111로 해도 아이디 정상 생성됨. ㅇㅇ❓❓
      // -> 결론: 오케이 나도 대충함 ㅅㄱ. 라고 할 뻔 하..

      throw new Error(String(data.error?.status || response.status));
    }

    return data;
  } catch (error) {
    console.error('🚀 ~ fetchWithPost ~ error:', error);
    console.error(error);

    throw new Error(getStringTypeError(error));
  }
};

export { fetchWithPost };
