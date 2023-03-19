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
};

export const patch = async (url, data) => {
    const response = await fetch(`${baseUrl}${url}`, {
        method: "PATCH",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    });

    return response;
};

export const remove = async (url, data) => {
    const response = await fetch(`${baseUrl}${url}`, {
        method:"DELETE",
        headers: {
            'Content-Type': "application/json"
        },
        body: data ? JSON.stringify(data) : JSON.stringify({})
    });

    return response;
};

export const put = async (url, userId) => {
    const response = await fetch(`${baseUrl}${url}`, {
        method:"PUT",
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify({userId})
    });

    return response;
}