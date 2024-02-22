const END_POINT_LOGIN = process.env.REACT_APP_END_POINT_LOGIN;
const END_POINT_SIGNUP = process.env.REACT_APP_END_POINT_SIGNUP;
const END_POINT_FOLDER_SAMPLE = process.env.REACT_APP_END_POINT_FOLDER_SAMPLE;
const END_POINT_USER = process.env.REACT_APP_END_POINT_USER;
const END_POINT_CHECK_EMAIL = process.env.REACT_APP_END_POINT_CHECK_EMAIL;
//links, folders, links?folderId={folderId}

export const signIn = async (id, password) => {
  const result = await fetch(END_POINT_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: id, password: password})
      }
  );
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result.json();
}

export const signUp = async (id, password) => {
  const result = await fetch(END_POINT_SIGNUP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: id, password: password})
      }
  );
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result.json();
}

export const checkEmailRedundancy = async (email) => {

  const result = await fetch(END_POINT_CHECK_EMAIL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email})
  });

  return result.status;
}

export const getFolderSampleList = async () => {
  const result = await fetch(END_POINT_FOLDER_SAMPLE);
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result.json();
}

export const getUserFolderCategories = async () => {
  const result = await fetch(END_POINT_USER + "folders");
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result.json();
}

export const getLinksByCategoryId = async (id) => {
  if (id === 'all') {
    console.log("all")
    const result = await fetch(END_POINT_USER + "links");
    if (result.status !== 200) {
      throw new Error(result.statusText);
    }
    return result.json();
  }
  console.log("id")
  const result = await fetch(END_POINT_USER + "links?folderId=" + id);

  if (result.status !== 200) {
    throw new Error(result.statusText);
  }

  return result.json();
}
