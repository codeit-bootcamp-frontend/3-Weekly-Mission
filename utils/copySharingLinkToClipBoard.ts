export const copySharingLinkToClipBoard = async (url: string) => {
    try {
        await navigator.clipboard.writeText(url);
    } catch (err) {
        console.error(err);
    }
};
