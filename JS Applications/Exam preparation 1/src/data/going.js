import {  get, post } from "./request.js";

const endpoints = {
    goToEvent: '/data/going',
    visitorsByEventId: (eventId) => `/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`,
    isGoing: (eventId, userId) => `/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

async function goToEvent(eventId){
    await post(endpoints.goToEvent, {eventId})
    
}

async function getVisitorsByEventId(eventId){
    return await get(endpoints.visitorsByEventId(eventId));
}

async function isGoing(eventId, userId){
    return await get(endpoints.isGoing(eventId, userId));
}

export {
    goToEvent,
    getVisitorsByEventId,
    isGoing
}