function  classes(){
    class Figure{
    m; 
    cm; 
    mm;
    current = 'cm';

    constructor(cm){
        this.cm = cm;
    }

    get area(){
        return this.area;
    }

    changeUnits(unit){
        if(unit == 'm'){
            this.m = this.cm / 100;
        }else if(unit == 'mm'){
            this.mm == this.cm * 100;
        }

        this.current = unit;
    }

    toString(){
        return `Figures units: ${this.cm}`
    }
}

class Circle extends Figure{
    radius;

    constructor(radius, m, cm, mm, current){
        super(m, cm, mm, current, this.area, this.changeUnits, this.toString);
        this.radius = radius
    }

    area(){
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Figure{
    width;
    height;

    constructor(width, height, m, cm, mm, current){
        super(m, cm, mm, current, this.area, this.changeUnits, this.toString);
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
  
}


let c = new Circle(5);

console.log(c.area); // 78.53981633974483

console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');

console.log(r.area); // 1200

console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');

console.log(r.area); // 12

console.log(r.toString()); 

return {Figure, Circle, Rectangle}
}

