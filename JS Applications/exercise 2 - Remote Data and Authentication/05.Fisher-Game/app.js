document.querySelector("a[id='home']").classList.add('active');
document.querySelector("a[id='logout']").style.display = 'inline-block';
document.querySelector('.load').addEventListener('click', onLoadCatch);
const addForm = document.getElementById('addForm')
addForm.addEventListener('submit', addCatch);


const addBtn = document.querySelector('.add');

const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');
const catches = document.getElementById('catches');
document.getElementById('logout').addEventListener('click', logOut);

let userData = JSON.parse(sessionStorage.getItem('userData'));
debugger;

const endpoints = {
    logoutUrl: 'http://localhost:3030/users/logout',
    catches: 'http://localhost:3030/data/catches',
    addUrl: 'http://localhost:3030/data/catches',
    updateUrl: 'http://localhost:3030/data/catches/',
    deleteUrl: 'http://localhost:3030/data/catches/'
}
updateNav();

function updateNav() {
    if (userData) {
        document.querySelector('nav p span').textContent = userData.email;
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
        addBtn.disabled = false;

    } else {
        document.querySelector('nav p span').textContent = 'guest';
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
        addBtn.disabled = true;
    }
}



async function logOut(e) {
    let option = {
        method: 'GET',
        headers: {
            'X-Authorization': userData.accessToken
        }
    }

    await fetch(endpoints.logoutUrl, option);
    sessionStorage.clear();
    userData = null;
    updateNav();
    await onLoadCatch();
}

async function onLoadCatch() {
    catches.innerHTML = '';
    const res = await fetch(endpoints.catches);
    const data = await res.json();
    debugger;
    data.forEach(x => {
        let div = listCatches(x);
        catches.appendChild(div);
    })

}

function listCatches(data) {
    let isOwner = hasOwner(data._ownerId);
    let div = document.createElement('div');
    div.classList.add('catch');

    div.innerHTML += `<label>Angler</label>`
    div.innerHTML += `<input type="text" class="angler" ${!isOwner ? 'disabled' : ""} value="${data.angler}">`
    div.innerHTML += `<label>Weight</label>`
    div.innerHTML += `<input type="text" class="weight" ${!isOwner ? 'disabled' : ""} value="${data.weight}">`
    div.innerHTML += `<label>Species</label>`
    div.innerHTML += `<input type="text" class="species" ${!isOwner ? 'disabled' : ""} value="${data.species}">`
    div.innerHTML += `<label>Location</label>`
    div.innerHTML += `<input type="text" class="location" ${!isOwner ? 'disabled' : ""} value="${data.location}">`
    div.innerHTML += `<label>Bait</label>`
    div.innerHTML += `<input type="text" class="bait" ${!isOwner ? 'disabled' : ""} value="${data.bait}">`
    div.innerHTML += `<label>Capture Time</label>`
    div.innerHTML += `<input type="number" class="captureTime" ${!isOwner ? 'disabled' : ""} value="${data.captureTime}">`


    let updateBtn = createBtn('update', data._id, 'Update');
    updateBtn.addEventListener('click', onUpdate);

    let deleteBtn = createBtn('delete', data._id, 'Delete');
    deleteBtn.addEventListener('click', onDelete);

    if (!hasOwner(data._ownerId)) {
        updateBtn.disabled = true;
        deleteBtn.disabled = true;
    }

    div.appendChild(updateBtn);
    div.appendChild(deleteBtn);

    return div;
}

function createBtn(btnClass, id, text) {
    let btn = document.createElement('button');
    btn.classList.add(btnClass);
    btn.textContent = text;
    btn.dataset.id = id;

    return btn;

}

async function onUpdate(e) {
    const id = e.target.dataset.id;
    const inputs = e.target.parentElement.querySelectorAll('input');
    let angler = inputs[0].value;
    let weight = inputs[1].value;
    let species = inputs[2].value;
    let location = inputs[3].value;
    let bait = inputs[4].value;
    let captureTime = inputs[5].value;
    debugger;
    
    const body = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime
    }

    const option = {
        method: 'PUT',
        headers:{
            'X-Authorization': userData.accessToken
        },
        body: JSON.stringify(body)
    }

    await fetch(endpoints.updateUrl + id, option);
    onLoadCatch();
}

async function onDelete(e) {
    const id = e.target.dataset.id;
    const option = {
        method: 'DELETE',
        headers:{
            'X-Authorization': userData.accessToken
        }
        
    }
    await fetch(endpoints.deleteUrl + id, option);
    debugger;
    onLoadCatch();
}

function hasOwner(id) {
    return userData?._id === id;
}

async function addCatch(e) {
    e.preventDefault();
    let empty = false;

    let formData = new FormData(addForm);

    formData.forEach(x => {
        if (!x) {
            empty = true;
        }
    });

    if (empty) {
        return;
        //error
    }

    let angler = formData.get('angler');
    let weight = formData.get('weight');
    let species = formData.get('species');
    let location = formData.get('location');
    let bait = formData.get('bait');
    let captureTime = formData.get('captureTime');
    let _ownerId = userData._id;


    let body = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime,
        _ownerId
    }
    

    let option = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': userData.accessToken
        },
        body: JSON.stringify(body)
    }

    await fetch(endpoints.addUrl, option);
    onLoadCatch();
    e.target.reset();
}

