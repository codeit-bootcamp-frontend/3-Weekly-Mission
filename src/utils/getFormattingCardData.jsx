const getFormattingCardData = (data) => {
  const formattedData = { ...data };
  data.folder.links.forEach((link, i) => {
    const formattedLink = { ...link, created_at: link.createdAt, image_source: link.imageSource };
    delete formattedLink.createdAt;
    delete formattedLink.imageSource;
    formattedData.folder.links[i] = formattedLink;
  });
  return formattedData;
};

export default getFormattingCardData;
