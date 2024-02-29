// axios 인스턴스는 특정 설정을 일괄적으로 적용할 수 있어서 편리하다.
// axios 별칭은 특정 요청에 대해 특정 설정을 적용할 수 있어서 편리하다.
import axios from "axios";

// axios 인스턴스를 사용하면 반복되는 설정을 일괄적으로 적용할 수 있다.

const URL_DOMAIN = "https://bootcamp-api.codeit.kr/api";

export const defaultInstance = axios.create({
    baseURL: URL_DOMAIN,
});
