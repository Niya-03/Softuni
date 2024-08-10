import { del, get, post, put } from "./request.js";


const endpoints = {
    allMotors: '/data/motorcycles?sortBy=_createdOn%20desc',
    addMotor: '/data/motorcycles',
    SingleMotor: '/data/motorcycles/'
}

async function getMotors(){
    return await get(endpoints.allMotors);
}

async function addMotor(data){
    return await post(endpoints.addMotor, data);
}

async function getSingleMotor(id){
    return await get(endpoints.SingleMotor+id);
}

async function editMotor(id, data){
    return await put(endpoints.SingleMotor+id, data);
}

async function deleteMotor(id){
    return await del(endpoints.SingleMotor+id);
}


export {
    getMotors,
    addMotor,
    getSingleMotor,
    editMotor,
    deleteMotor
}