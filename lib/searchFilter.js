const filterConditions = ["url", "title", "description"];

export const filterLinks = (folders, keyword) => {
  if (keyword === "") {
    return folders;
  }
  return folders.filter((folder) => isMatches(folder, keyword));

  function isMatches(folder) {
    let isMatches = false;
    filterConditions.forEach((condition) => {
      if (isMatches === false && folder[condition]?.includes(keyword)) {
        isMatches = true;
      }
    });
    return isMatches;
  }
};
