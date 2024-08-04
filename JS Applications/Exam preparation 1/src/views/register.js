import {html, render, page} from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';
import {userApi} from '../data/users.js';

const registerTemp = (onRegister) => html `
      <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onRegister}class="register-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>
`;

export async function showRegisterView(ctx){
    render(registerTemp((createSubmitHandler(onRegister))));
}

async function onRegister(data, form){
    if(!data['email'] || !data['password']){
      return alert('Fill all fields!');
    }

    if(data['password']!== data['re-password']){
      return alert('passwords do not match');
    }

    await userApi.register(data['email'], data['password']);
    updateNav();
    page.redirect('/');
}