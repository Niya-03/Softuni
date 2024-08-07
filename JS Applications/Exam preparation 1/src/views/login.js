import {html, render, page} from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';
import {userApi} from '../data/users.js';



const loginTemp = (onLogin) => html `
    <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit=${onLogin} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`;

export async function showLoginView(ctx){
    render(loginTemp((createSubmitHandler(onLogin))));
}

async function onLogin({email, password}, form){
    if(!email || !password){
        return;
    }

    await userApi.login(email, password);
    updateNav();
    page.redirect('/');
}