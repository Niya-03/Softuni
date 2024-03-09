class Hex{
    value;

    constructor(value){
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        let hexString = this.value.toString(16);
        return '0x' + hexString.toUpperCase();
    }

    plus(num){
        let newVal = this.value + Number(num.valueOf());
        return new Hex(newVal);
    }

    minus(num){
        let newVal = this.value - Number(num.valueOf());
        return new Hex(newVal);
    }

    parse(str){
        let num = parseInt(str, 16);
        return num;
    }
}


let FF = new Hex(255);
assert.instanceOf(FF,Hex);
assert.equal(FF.valueOf(),255);

let act = FF.toString();
let exp = "0xFF";
assert.equal(act,exp);

assert.isTrue(FF.valueOf() -1  == 254);
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString();
let exp2 = "0xA5";
assert.equal(act2,exp2);
let act3 = a.minus(b).toString();
let exp3 = "0x5";
assert.equal(act3,exp3);