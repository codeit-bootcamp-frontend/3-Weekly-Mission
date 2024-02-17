const shareToFacebook = (url: string) => {
    const sharedLink = encodeURIComponent(url);
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
};

export default shareToFacebook;
