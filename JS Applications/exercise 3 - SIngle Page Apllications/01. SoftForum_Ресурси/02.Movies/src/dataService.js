import { get, post } from "./req.js";

const baseUrl = 'http://localhost:3030';

const endpoints = {
    catalog: '/data/movies',
    addLike: '/data/likes'
}

async function getAllMovies() {
    return await get(baseUrl + endpoints.catalog);
}

async function getSingleMovie(id){
    return await get(baseUrl+endpoints.catalog + "/" + id);
}

async function getLike(id){
    return await get(baseUrl+`/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
}

async function addLike(id){
    return await post(baseUrl+endpoints.addLike, {'movieId': id})
}

export{
    getAllMovies,
    getSingleMovie,
    getLike,
    addLike
}