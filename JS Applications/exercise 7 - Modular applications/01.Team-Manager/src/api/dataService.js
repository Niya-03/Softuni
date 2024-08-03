import { api } from "./requester.js";

const base = 'http://localhost:3030';

const endpoints = {
    teams: '/data/teams',
    member: '/data/members',

}

async function getAllTeams() {
    return await api.get(base + endpoints.teams);
}

async function createNewTeam(data) {
    return await api.post(base + endpoints.teams, data);
}

async function getSingleTeam(id) {
    return await api.get(base + endpoints.teams + '/' + id);
}

async function editTeam(data, id) {
    return await api.put(base + endpoints.teams + '/' + id, data);
}

async function getListMember(teamId){
    return await api.get(`${base}/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`)
}

async function requestToJoin(teamId){
    return await api.post(`${base}${endpoints.member}`, {teamId});
}

async function approveRequest(id, data){
    return await api.put(`${base}${endpoints.member}/${id}`, data);
}

export const dataService = {
    getAllTeams,
    createNewTeam,
    getSingleTeam,
    editTeam,
    getListMember,
    requestToJoin,
    approveRequest
}

//getMembers: '/data/members?where=status%3D%22member%22',
//     getAllMembersInTeam: '/data/members?where=teamId IN ("{id1}","{id2}","{id3}",…) AND status="member"',
//     createTeam: '/data/teams',
//     editTeam: '/data/teams/:id',
//     listAllMemberships: '/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers',
//     becomeMember: '/data/members',
//     approveMember: '/data/members/:id',
//     cancelDecline: '/data/members/:id',
//     myTeams: '/data/members?where=_ownerId%3D%22{userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams',
//     listAllMembersInTeam: '/data/members?where=teamId IN ("{id1}","{id2}","{id3}",…) AND status="member"',