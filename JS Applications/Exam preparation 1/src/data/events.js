import { del, get, post, put } from "./request.js"


const endpoints = {
    dashboard: '/data/events?sortBy=_createdOn%20desc',
    eventById: '/data/events/',
    details: '/data/events/',

};

async function getAllEvents() {
    return await get(endpoints.dashboard);
}

async function getEventById(id) {
    return await get(endpoints.details + id)
}

async function createEvent(name, imageUrl, category, description, date) {
    return await post(endpoints.eventById, {
        name, imageUrl, category, description, date
    })
}

async function updateEvent(id, data){
    return await put(endpoints.eventById+id, data);
}

async function deleteEvent(id){
    return await del(endpoints.eventById+id);
}

export {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
}