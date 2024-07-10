import { showHomeView } from "./home.js";
import { updateNav } from "./nav.js";
import { setUserData } from "./userHelper.js";
import { login } from "./userService.js";

// export function showLogin(){
//     document.querySelectorAll('section').forEach(section => section.style.display = 'none');
//     document.querySelector('#form-login').style.display = 'block';
// }

start()

function start() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', onLogin);
}

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries())

    const email = data.email.trim();
    const password = data.password.trim();

    if(!email || !password){
        return alert('Fill all fields!');
    }
    
    const userData = await login({email, password});
    setUserData(userData);
    showHomeView();

//     const url = 'http://localhost:3030/users/login';

//     const options = {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//     };
//     debugger;
//     const res = request(url, options);

//     if(res){
//         localStorage.setItem('user', JSON.stringify(res));
//           window.location = './index.html'
//     }
    

}