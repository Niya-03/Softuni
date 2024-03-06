class Circle{
    _radius;

    constructor(r){
        this.radius = r;
    }

    set radius(r){
        this._radius = r;
    }

    get radius(){
        return this._radius;
    }

    set diameter(d){
        if(typeof d != 'number'){
            throw TypeError('Diameter must be a number!')
        }
        this._radius = d/2;
    }

    get diameter(){
        return Number(this._radius * 2);
    }

    get area(){
        return Number(Math.PI * (this._radius ** 2));
    }
}

let c = new Circle(2);

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);

c.diameter = 1.6;

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);