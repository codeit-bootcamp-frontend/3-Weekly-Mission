const getFetch = async (host, path, body, headers = {}) => {
  const url = `https://${host}/${path}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(url, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  throw Error(data);
};

export default getFetch;
