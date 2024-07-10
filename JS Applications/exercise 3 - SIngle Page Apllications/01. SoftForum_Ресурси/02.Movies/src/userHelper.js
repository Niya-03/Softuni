function setUserData(userData){
    localStorage.setItem('user', JSON.stringify(userData));
}

function getUserData(){
    return JSON.parse(localStorage.getItem('user'));
}

function getUserToken(){
    const userData = getUserData();
    return userData?.accessToken;
}

function getUserId(){
    const userData = getUserData();
    return userData?._id;
}

function clearUserData(){   
    localStorage.clear();   
}

export{
    setUserData,
    getUserData,
    getUserToken,
    getUserId,
    clearUserData
}