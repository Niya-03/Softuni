function solve() {
  debugger
  const areas = document.querySelectorAll('#exercise textarea');
  const input = areas[0];
  const output = areas[1];
  let toAdd = input.value;
  const tbody = document.querySelector('tbody');
 
  const buttons = document.querySelectorAll('#exercise button');
  const generateBtn = buttons[0];
  const buyBtn = buttons[1];

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(){
    let furniture = JSON.parse(toAdd);
   
    for (let obj of furniture) {
      let row = document.createElement('tr');
      
      let image = document.createElement('td');
      let name = document.createElement('td');
      let price = document.createElement('td');
      let decFac = document.createElement('td');
      let mark = document.createElement('td');

      let img = document.createElement('img');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      img.src = obj.img;
      image.appendChild(img);
      name.textContent = obj.name;
      price = obj.price;
      decFac = obj.decFactor;
      mark.appendChild(checkbox);

      row.appendChild(image);
      row.appendChild(name);
      row.appendChild(price);
      row.appendChild(decFac);
      row.appendChild(mark);

    }
  }

  function buy(){

  }
}

//[{"name": "Sofa", 
//"img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", 
//"price": 150, 
//"decFactor": 1.2}]