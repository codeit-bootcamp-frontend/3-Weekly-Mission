const postFetch = async (
    host: string,
    path: string,
    body?: object,
    headers = {}
) => {
    const url = `https://${host}/${path}`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: body ? JSON.stringify(body) : null,
    };

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        if (res.ok) {
            return data;
        }
        throw new Error(data.error.message);
    } catch (error) {
        throw error;
    }
};

export default postFetch;
