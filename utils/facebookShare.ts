export const shareFacebook = (url: string) => {
  const sharedLink = encodeURIComponent(url);
  window.open(
    `http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`,
    "_blank",
    "popup,noopener,noreferrer"
  );
};
