const baseUrl = "http://localhost:3030";

export const post = async (url, data) => {
    const response = await fetch(`${baseUrl}${url}`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    });

    return response;
};

export const get = async (url) => {
    const response = await fetch(`${baseUrl}${url}`);

    return await response.json();
}