import { clearUserData, getUserData } from "../util.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (!response.ok) {

            if (response.status === 403) {
                clearUserData();
            }

            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {
        //to do add custom error handling and vizualization
        alert(err.message);
        throw err;
    }

}


async function get(url){
    return await request('GET', url);
}

async function post(url, data){
    return await request('POST', url, data);
}

async function put(url, data){
    return await request('PUT', url, data);
}

async function del(url){
    return await request('DELETE', url);
}

export  {
    get,
    post,
    put,
    del
}