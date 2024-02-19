function create(words) {
   let result = document.getElementById('content');
   for (let word of words) {
      let newDiv = document.createElement("div");
      let par = document.createElement('p');
      par.textContent = word;
      newDiv.appendChild(par);
      par.style.display = 'none';
      newDiv.addEventListener('click', () => par.style.display = '');
      result.appendChild(newDiv);
   }
}