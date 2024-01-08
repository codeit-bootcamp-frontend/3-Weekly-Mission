import camelCase from "camelcase";

export default function convertKeysToCamelCase(data) {
  return data.map((item) => {
    const camelCaseItem = {};
    for (const key in item) {
      camelCaseItem[camelCase(key)] = item[key];
    }
    return camelCaseItem;
  });
}
