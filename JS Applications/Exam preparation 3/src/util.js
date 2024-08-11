function setUserData(data){
    localStorage.setItem('user', JSON.stringify(data));
}

function getUserData(){
    return JSON.parse(localStorage.getItem('user'));
}

function clearUserData(){
    localStorage.removeItem('user');
}

function getUserToken(){
    return getUserData().accessToken;
}

//to do add custom validation

function createSubmitHandler(callback){
    return function(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(data), event.target);
    }
}

function updateNav(){
    const userData = getUserData();

    if(userData){
        document.querySelector('nav .guest').style.display = 'none';
        document.querySelector('nav .user').style.display = 'block';
    }else{
        document.querySelector('nav .guest').style.display = 'block';
        document.querySelector('nav .user').style.display = 'none';
    }
}

function isOwner(itemOwnerId){
    return getUserData()?._id === itemOwnerId;    
}

export {
    setUserData,
    getUserData,
    clearUserData,
    getUserToken,
    createSubmitHandler,
    updateNav,
    isOwner
}