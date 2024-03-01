const isMatchSearchKeyword = (link: FolderLinksData, searchKeyword: string) => {
  if (!searchKeyword) {
    return true;
  }

  const isSubstringMatching = (linkdata: string) => {
    return linkdata
      ? linkdata.toUpperCase().includes(searchKeyword.toUpperCase())
      : false;
  };

  const urlMatch = isSubstringMatching(link.url);
  const titleMatch = isSubstringMatching(link.title);
  const descriptionMatch = isSubstringMatching(link.description);

  return urlMatch || titleMatch || descriptionMatch;
};

export default isMatchSearchKeyword;
