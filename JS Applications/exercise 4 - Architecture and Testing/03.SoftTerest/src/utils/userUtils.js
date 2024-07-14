function getUser(){
    return JSON.parse(localStorage.getItem('user'));
}

function hasUser(){
    return !!getUser();
}

function removeUser(){
    localStorage.clear();
}

function setUser(data){
    localStorage.setItem('user', JSON.stringify(data));
}

function hasOwner(id){
    return getUser()._id === id;
}
    

export {
    getUser,
    hasUser,
    removeUser,
    setUser,
    hasOwner
}