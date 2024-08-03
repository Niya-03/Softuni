import { userHelper } from "../common/userHelper.js";

async function requester(method, url, data) {
    const option = {
        method,
        headers: {}
    }

    if (data) {
        option.headers["Content-Type"] = "application/json";
        option.body = JSON.stringify(data);
    }

    const accessToken = userHelper.getToken();

    if(accessToken){
        option.headers["X-Authorization"] = accessToken;
    }

    try {
        const response = await fetch(url, option);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return response;
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return alert(error);

    }
}

async function get(url) {
    return await requester('GET', url);
}

async function post(url, data) {
    return await requester('POST', url, data);
}

async function put(url, data) {
    return await requester('PUT', url, data);
}

async function del(url) {
    return await requester('DELETE', url);
}

export const api = {
    get,
    put,
    del,
    post
}