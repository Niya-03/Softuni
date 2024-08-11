import {get, post, put, del} from './request.js';

const endpoints = {
    getAllCars: '/data/cars?sortBy=_createdOn%20desc',
    addCar: '/data/cars',
    getSingleCar: '/data/cars/'
}

async function getCars(){
    return await get(endpoints.getAllCars);
}

async function addCar(data){
    return await post(endpoints.addCar, data);
}

async function getCar(id){
    return await get(endpoints.getSingleCar + id);
}

async function deleteCar(id) {
    return await del(endpoints.getSingleCar + id);
}

async function updateCar(id, data){
    return await put(endpoints.getSingleCar + id, data);
}

async function searchByQuery(query){
    return await get(`/data/cars?where=model%20LIKE%20%22${query}%22`);
}

export {
    getCars,
    addCar,
    getCar,
    deleteCar,
    updateCar,
    searchByQuery
}