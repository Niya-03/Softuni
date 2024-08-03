function setUserData(data){
    sessionStorage.setItem('userData', JSON.stringify(data));

}

function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'));
}

function getUserId(){
    return getUserData()?._id;
}

function getToken(){
    return getUserData()?.accessToken;
}

function removeUserData(){
    return sessionStorage.removeItem('userData');
}

function hasOwner(itemOwnerId){
    return getUserId() === itemOwnerId;
}

export const userHelper = {
    getUserData,
    getUserId,
    getToken,
    setUserData,
    removeUserData,
    hasOwner
}