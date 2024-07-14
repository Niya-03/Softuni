import { post, get } from "./requester.js"

const endpoints = {
    registerUrl: '/users/register',
    loginUrl: '/users/login',
    logoutUrl: '/users/logout',
    
}


async function register(data) {
    return await post(endpoints.registerUrl, data);
}

async function login(data) {
    return await post(endpoints.loginUrl, data);
}

async function logout() {
    return await get(endpoints.logoutUrl);
}

export {
    register,
    login,
    logout
}