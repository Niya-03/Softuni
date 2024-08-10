import { clearUserData, setUserData } from "../util.js";
import {get, post} from "./request.js"

//to do adapt user profile to exam requierement (identity, extra property)

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

async function login(email, password){
    const result = await post(endpoints.login, {email, password});
    setUserData(result);
}

async function register(email, password){
    const result = await post(endpoints.register, {email, password});
    setUserData(result);
}

async function logout(){
    const promise = get(endpoints.logout);
    clearUserData();
    await promise;
}

export const userApi = {
    login,
    register,
    logout
}