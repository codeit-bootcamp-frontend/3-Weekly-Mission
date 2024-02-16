import { useState } from "react";
import useEffectOnce from "./useEffectOnce";
import camelcaseKeys from "camelcase-keys";
import { ApiFunc } from "../types/functionType";
import { getErrorMessage } from "../utils/errorMassage";

export default function useFetchData(apiFunction: ApiFunc) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async (apiFunc = apiFunction) => {
    if (isLoading) return;
    setData(null);
    setErrorMessage("");
    setIsLoading(true);
    try {
      const result = await apiFunc();
      if (!result) {
        throw new Error("없습니다!");
      }
      const { data } = result;
      if (data.length < 1) {
        setData(null);
        return;
      }
      const camelData = camelcaseKeys(data, { deep: true });
      setData(camelData);
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffectOnce(fetchData);

  return { data, errorMessage, isLoading, fetchData, setData };
}
