import { getUserToken } from "./userHelper.js";
export async function request(method, url, data) {
    const option = {
        method
    }

    const userToken = getUserToken();

    const headers = {
        'Content-Type': 'application/json'
    }

    if (userToken) {
        headers['X-Authorization'] = userToken;
    }

    option[headers] = headers;

    if (data) {
        option.body = JSON.stringify(data);
    }
    let resData = '';

    try {
        const res = await fetch(url, option);

        if (!res.ok) {
            const errData = await res.json();
            throw new Error(errData.message);
        }
        return resData = await res.json()
    } catch (err) {
        return alert(err.message);
    }



}

const get = (url) => {
    return request('GET', url);
}

const post = (url, data) => {
    return request('POST', url, data);
}

const update = (url, data) => {
    return request('PUT', url, data);
}

const del = (url) => {
    return request('DELETE', url);
}

export {
    get,
    post,
    update,
    del
}