import { api } from "./requester.js";

const base = 'http://localhost:3030/';

const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout'
}

async function register(data){
    return await api.post(base + endpoints.register, data);
}

async function login(data){
    return await api.post(base + endpoints.login, data);
}

async function logout(){
    return api.get(base + endpoints.logout);
}



export const userService = {
    register,
    login,
    logout
}