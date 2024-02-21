// 타입스크립트 v4.4 부터는 error의 object가 unknown type으로 정의돼지만 타입가드를 이용해 타입을 정의할 수 있다.
// 파라미터에서는 error의 타입을 unknown으로 정의하지만 반환에서는 string으로 정의한다.
export const getErrorMessage = (error: unknown): string => {
    // error가 Error의 인스턴스인지 확인하는 타입 가드를 사용한다.
    if (error instanceof Error) {
        return error.message;
    }
    return String(error);
};
