import { page, render, html } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { userApi } from "../data/users.js";
import { updateNav } from "../util.js";

const registerTemp = (handler) => html`
    <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${handler} class="register-form">
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
        <p class="message">Already registered? <a href="#">Login</a></p>
      </form>
    </div>
  </section>
`;

export function showRegisterView() {
    render(registerTemp(createSubmitHandler(onRegister)));
}

async function onRegister(data, form){
    if(!data.email || !data.password || !data['re-password'] || data.password !== data['re-password']){
        return alert('Check all fields!!!');
    }

    await userApi.register(data.email,data.password);
    updateNav();
    page.redirect('/');
}