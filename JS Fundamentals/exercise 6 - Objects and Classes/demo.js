
    class Laptop{

        
        constructor(info, quality){
            this.producer = info.producer;
            this.age = Number(info.age);
            this.brand = info.brand;
            this.quality = Number(quality);

            this.isOn = false;
            this.price = (800 - this.age*2 + this.quality*0.5).toFixed(1);
        }

        turnOn(){
            this.isOn = true;
            this.quality--;
            return true;
        }

        turnOff(){
            this.isOn = false;
            this.quality--;
            return false;
        }

        showInfo(){
            return JSON.stringify(info)
        }
         
    }



let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)

console.log(laptop);

