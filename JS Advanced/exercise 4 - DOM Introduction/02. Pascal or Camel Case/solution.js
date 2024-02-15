function solve() {
  let text = document.getElementById("text").value;
  let type = document.getElementById("naming-convention").value;

  text = text.toLowerCase();
  let arr = text.split(" ");
  let result = document.getElementById("result");
  let string = "";

  if (type == "Pascal Case") {
    pascalCase();
  } else if (type == "Camel Case") {
    camelCase();
  } else {
    result.textContent = "Error!";
  }

  function pascalCase(text) {
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      let transformed = word.split("");
      transformed[0] = transformed[0].toUpperCase();
      transformed = transformed.join("")
      string += transformed;
    }

    result.textContent = string;
  }

  function camelCase(text) {
    string += arr[0];
    for (let i = 1; i < arr.length; i++) {
      let word = arr[i];
      let transformed = word.split("");
      transformed[0] = transformed[0].toUpperCase();
      transformed = transformed.join("")
      string += transformed;
    }

    result.textContent = string;
  }
}