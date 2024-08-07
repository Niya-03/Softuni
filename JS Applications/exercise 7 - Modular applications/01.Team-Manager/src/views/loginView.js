import { html } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../api/userService.js";
import { renderer } from "../common/render.js";
import { userHelper } from "../common/userHelper.js";
import { goTo } from "../common/goTo.js";

const loginTemp = (error) => html`
<section id="login">
        <article class="narrow">
            <header class="pad-med">
                <h1>Login</h1>
            </header>
            <form @submit=${onSubmit} id="login-form" class="main-form pad-large">
                ${error ? html`<div class="error">${error}</div>` : ""}
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input class="action cta" type="submit" value="Sign In">
            </form>
            <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
            </footer>
        </article>
    </section>
`;

export function showLoginView() {
    renderer(loginTemp());
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    const pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g;

    if (!pattern.test(email)) {
        return renderer(loginTemp('Invalid email'));
    }

    if (password.length < 3) {
        return renderer(loginTemp('Password must be longer than 3 characters'));
    }

    if (!email) {
        return renderer(loginTemp('Enter email'));
    }

    const userData = await userService.login({email, password});
    userHelper.setUserData(userData);
    goTo("/my-team");
}