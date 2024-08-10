import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";
import {userApi} from "../data/users.js"

const loginTemp = (handler) => html `
<section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${handler} class="login-form">
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

export function showLoginView(ctx){
    render(loginTemp(createSubmitHandler(onLogin)));
}

async function onLogin(data, form){
    if (!data.email || !data.password ){
        return alert('Fill all fields');
    }

    await userApi.login(data.email, data.password);
    updateNav();
    page.redirect('/');
    
}