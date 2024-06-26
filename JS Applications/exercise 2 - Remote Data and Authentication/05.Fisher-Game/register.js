document.querySelector('form').addEventListener('submit', sendData);
document.querySelector("a[id='logout']").style.display = 'none';
document.querySelector("a[id='register']").classList.add('active');
const url = 'http://localhost:3030/users/register'

async function sendData(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');
    
    if(!email || !password || !rePass || password != rePass){
        return;
    }

    await createUser({email, password});
    e.target.reset();
    window.location = 'index.html';
}

async function createUser(data){
    const options = createOption('POST', data)
    const res = await fetch(url, options);
    const userData = await res.json();
    sessionStorage.setItem('userData', JSON.stringify(userData));

}

function createOption(method, data){
    return{
        method: method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}