export const setQueryString = (key: string, value?: number | string) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);

  if (value === undefined || value === null) {
    searchParams.delete(key);
  } else {
    const stVal = value.toString();
    searchParams.set(key, stVal);
  }

  return `?${searchParams}`;
};
