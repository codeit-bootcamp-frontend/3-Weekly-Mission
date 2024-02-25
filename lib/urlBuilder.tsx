export function makeUrl(
  path: string,
  keys: (string | number | boolean)[],
  values: (string | number | boolean)[]
) {
  let newPath = path;
  keys.forEach((key, i) => {
    newPath = addQueryString(newPath, key, values[i]);
  });
  return newPath;
}

function addQueryString(
  path: string,
  key: string | number | boolean,
  value: string | number | boolean
): string {
  if (path.includes(key as string)) {
  }
  path = path.includes("?")
    ? `${path}&${key}=${value}`
    : `${path}?${key}=${value}`;
  return path;
}
