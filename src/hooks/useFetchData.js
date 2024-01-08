import { useEffect, useState } from "react";
import convertKeysToCamelCase from "../utils/camelCaseUtil";

export default function useFetchData(apiFunction) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const result = await apiFunction();
      if (!result) throw new Error("없습니다!");
      const { data } = result;
      const camelData = convertKeysToCamelCase(data);
      setData(camelData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIdData = async (apiFunc, id) => {
    try {
      const result = await apiFunc(id);
      if (!result) {
        throw new Error("데이터를 가져올 수 없습니다!");
      }
      const { data } = result;
      if (data.length < 1) {
        setData(null);
        return;
      }
      const camelData = convertKeysToCamelCase(data);
      setData(camelData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEntireData = async () => {
    await fetchData();
  };

  return [data, handleEntireData, handleIdData];
}
