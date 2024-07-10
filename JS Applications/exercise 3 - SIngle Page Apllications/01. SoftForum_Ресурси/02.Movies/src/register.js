import { showHomeView } from "./home.js";
import { register } from "./userService.js";
import { setUserData } from "./userHelper.js";

start()

function start() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', onRegister);
}

async function onRegister(e) {
    e.preventDefault();

    const url = 'http://localhost:3030/users/register';


    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const email = data.email.trim();
    const password = data.password.trim();
    const repeatedPassword = data.repeatPassword.trim();

    if (!email) {
        return alert('Write your email!');
    } else if (!password) {
        return alert('Write your password!');
    } else if (!repeatedPassword) {
        return alert('Repeat your password!');
    } else if (password !== repeatedPassword) {
        return alert('Passwords do not match!');
    } else if (password.length < 6) {
        return alert('Password must be at least 6 characters long!');
    }

    debugger;
    const res = await register({ email, password });
    setUserData(res);
    showHomeView();
    // const options = {
    //     method: 'post',
    //     headers:
    //         { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password })
    // }

    // const res = await fetch(url, options);

    // if (!res.ok) {
    //     const err = await res.json();
    //     throw new Error(err.message);
    // }

    // const userData = await res.text();
    // localStorage.setItem('user', userData);

    // window.location = './index.html'



}

