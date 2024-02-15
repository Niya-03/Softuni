function solve() {
  const input = document.getElementById("input");
  let ivalue = input.value;
  let arr = ivalue.split(".");
  const result = document.getElementById("output");
  let count = 0;

  let newText = "";

  for (sentence of arr) {
    if (sentence.length < 1) {
      continue;
    }
    count++;
    newText += sentence += ". ";
    if (count%3==0) {
      newText += sentence += ".";
      
      const paragraph = document.createElement("p");
      let node = document.createTextNode(newText);
      paragraph.appendChild(node);
      result.appendChild(paragraph);
      newText = "";
    }
  }
  if (count % 3!=0) {
    let paragraph = document.createElement("p");
    let node = document.createTextNode(newText);
    paragraph.appendChild(node);
    result.appendChild(paragraph);
  }

}