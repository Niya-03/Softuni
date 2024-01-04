function rectangle(width, height, color){

    let fl = color.substr(0,1).toUpperCase();
    let rest = color.substr(1,);
    let full = fl + rest;

    let rect = {
        width:width,
        height:height,
        color:full,
        calcArea() {return this.width * this.height}

    }

    return rect;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());