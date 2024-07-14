const homeSection = document.querySelector("div[data-view-name='home']");
let context = null;

export function showHomeView(ctx){
    context = ctx;
    context.render(homeSection);
}