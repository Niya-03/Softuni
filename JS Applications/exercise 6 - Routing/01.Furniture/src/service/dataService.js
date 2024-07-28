import { api } from "../requester.js";

const base = 'http://localhost:3030/data/';

const endpoints = {
    furniture: 'catalog',
    myFurniture: (userId) => `catalog?where=_ownerId%3D%22${userId}%22`
}

async function createFurniture(data) {
    return await api.post(base + endpoints.furniture, data);
}

async function getAllFurniture() {
    return await api.get(base + endpoints.furniture);
}

async function getFurnitureDetails(id){
    return await api.get(base+endpoints.furniture + '/' + id);
}

async function updateFurniture(data, id) {
    return await api.put(base + endpoints.furniture + '/' + id, data);
}

async function deleteFurniture(id) {
    return await api.del(base + endpoints.furniture + '/' + id);
}

async function getMyFurniture(userId){
    return await api.get(base + endpoints.myFurniture(userId));
}

export const dataService = {
    createFurniture,
    getAllFurniture,
    getFurnitureDetails,
    updateFurniture,
    deleteFurniture,
    getMyFurniture
}