import {html, render} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const exampleTemplate = (onSubmit) => html `
<section>
        <p>content</p>
        <form @submit=${onSubmit}>
            <label>email
                <input type='text' name='email'/>
            </label>
            <label>password
                <input type='text' name='password'/>
            </label>
            <button>submit</button>
        </form>
</section>
`;

export function showExample(ctx){
    render(exampleTemplate(createSubmitHandler(onSubmit)))
}

function onSubmit(data, form){
    console.log(data);
    form.reset();
}