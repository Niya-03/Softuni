document.querySelector('form').addEventListener('submit', sendData);
document.querySelector("a[id='logout']").style.display = 'none';
document.querySelector("a[id='login']").classList.add('active');
const url = 'http://localhost:3030/users/login'

async function sendData(e){
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');

    if(!email || !password){
        return;
    }

    await loginUser({email, password});
    e.target.reset();
    window.location = 'index.html';
}

async function loginUser(data){
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